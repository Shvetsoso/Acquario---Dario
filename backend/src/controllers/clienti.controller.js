const { createClienteSchema } = require('../validators/clienti.validator');

exports.createCliente = async (req, res, next) => {
  try {
    const { error } = createClienteSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      });
    }

    const cliente = await service.createCliente(req.body);
    res.status(201).json(cliente);

  } catch (err) {
    next(err);
  }
};

exports.getAllClienti = async (req, res, next) => {
  try {
    const clienti = await service.getAllClienti();
    res.json(clienti);
  } catch (err) {
    next(err);
  }
};

exports.getClienteById = async (req, res, next) => {
  try {
    const cliente = await service.getClienteById(req.params.id);
    res.json(cliente);
  } catch (err) {
    next(err);
  }
};

exports.updateCliente = async (req, res, next) => {
  try {
    const cliente = await service.updateCliente(req.params.id, req.body);
    res.json(cliente);
  } catch (err) {
    next(err);
  }
};