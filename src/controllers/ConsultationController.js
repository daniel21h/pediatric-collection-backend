const mongoose = require("mongoose");

const Consultation = mongoose.model("Consultation");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const consultation = await Consultation.paginate(
      {},
      { page, limit: 10, sort: { patient: 1 } }
    );

    return res.json(consultation);
  },

  async show(req, res) {
    const consultation = await Consultation.findById(req.params.id);

    return res.json(consultation);
  },

  async store(req, res) {
    const consultation = await Consultation.create(req.body);

    return res.json(consultation);
  },
  async update(req, res) {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(consultation);
  },

  async delete(req, res) {
    const consultation = await Consultation.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
