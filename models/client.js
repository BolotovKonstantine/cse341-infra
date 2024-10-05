// models/client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    organisationName: { type: String, required: true },
    address: String,
    primaryContact: String,
    phone: String,
    email: { type:String, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, required: true },
});

module.exports = mongoose.model('Client', clientSchema, 'client');