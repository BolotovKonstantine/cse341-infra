const passport = require("passport");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
//#swagger.tags=['Hello world']
res.send('Hello world')
});

router.use('/clients', require('./clientRoutes') );
//#swagger.tags=['Clients']
router.use('/organisations', require('./organisationRoutes'));
//#swagger.tags=['Infrastructure description']

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function (req,res,next) {
    req.logout(function (err){
        if (err) { return next(err); }
        res.redirect('/');
    });
    res.redirect('/');
    }
);
module.exports = router;