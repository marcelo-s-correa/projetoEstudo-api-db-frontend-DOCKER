const Area = require('../models/Area.js');

module.exports = {
    async index(req, res) {
        const areas = await Area.findAll();

        return res.json(areas);
    },

    async store(req, res) {
        const { name } = req.body;

        const area = await Area.create({ name });

        return res.json(area);
    }
};