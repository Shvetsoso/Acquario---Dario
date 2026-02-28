const venditeService = require('../services/vendite.service');
const venditeValidator = require('../validators/vendite.validator');

const createVendita = async (req, res) => {
  try {
    const { error } = venditeValidator.createVenditaSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }

    const vendita = await venditeService.createVendita(req.body);

    res.status(201).json({
      success: true,
      data: vendita
    });

  } catch (err) {
    next(err);
  }
};

module.exports = {
  createVendita
};