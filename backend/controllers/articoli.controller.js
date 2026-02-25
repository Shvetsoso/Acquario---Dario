const { createArticoloSchema } = require('../validators/articoli.validator');

exports.createArticolo = async (req, res, next) => {
  try {
    const { error } = createArticoloSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      });
    }

    const articolo = await service.createArticolo(req.body);
    res.status(201).json(articolo);

  } catch (err) {
    next(err);
  }
};