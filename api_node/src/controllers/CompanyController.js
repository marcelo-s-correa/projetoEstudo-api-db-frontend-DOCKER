const Company = require('../models/Company.js');

module.exports = {
    async index(req, res) {

        const companies = await Company.findAll();

        return res.json(companies);
    },

    async store(req, res) {
        const { name, city } = req.body;

        const company = await Company.create({ name, city });

        return res.json(company);
    }
};