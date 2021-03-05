const Office = require('../models/Office');

module.exports = {
    async index(req, res) {
        const offices = await Office.findAll();

        return res.json(offices);
    },

    async store(req, res) {
        const { name } = req.body;

        const offices = await Office.create({ name });

        return res.json(offices);
    }
};