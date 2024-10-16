// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file
const passport = require('passport');
const session = require('express-session');
const process = require("node:process");
const GithubStrategy = require('passport-github2').Strategy;
const cors = require('cors');





const app = express();
const port = process.env.PORT || 3000;

// Use the MONGODB_URI environment variable from the .env file
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize());

app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use(cors({methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH']}));
app.use(cors({origin: '*'}));



passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
},
    function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
    }

    ))
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

app.get("/", (req, res) => {
    res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.name}` : 'Logged out');
});
app.get('/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs', session: false }),
    (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
    }
    );

app.use('/',require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});