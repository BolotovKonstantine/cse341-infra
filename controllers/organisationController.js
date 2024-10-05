// controllers/organisationController.js
const Organisation = require('../models/organisation');

exports.createOrganisation = async (req, res) => {
  try {
    const organisation = new Organisation(req.body);
    await organisation.save();
    res.status(201).send(organisation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllOrganisations = async (req, res) => {
  try {
    const organisations = await Organisation.find({});
    res.send(organisations);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOrganisationById = async (req, res) => {
  try {
    const organisation = await Organisation.findById(req.params.id);
    if (!organisation) return res.status(404).send();
    res.send(organisation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!organisation) return res.status(404).send();
    res.send(organisation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndDelete(req.params.id);
    if (!organisation) return res.status(404).send();
    res.send(organisation);
  } catch (error) {
    res.status(400).send(error);
  }
};