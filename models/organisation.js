// models/organisation.js
const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
    organisationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    numberOfWorkstations: Number,
    primaryOS: String,
    numberOfPhysicalServers: Number,
    numberOfVirtualServers: Number,
    virtualisationType: String,
    numberOfLinuxServers: Number,
    numberOfWindowsServers: Number,
    services: String,
});

module.exports = mongoose.model('Organisation', organisationSchema, 'infra');