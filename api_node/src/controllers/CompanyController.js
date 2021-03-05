const Company = require('../models/Company.js');
const User = require('../models/User');

module.exports = {
    async index(req, res) {

        const companies = await Company.findAll();

        return res.json(companies);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { name, city } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'O Usuario não foi encontrado' });
        }

        const [company] = await Company.findOrCreate({
            where: { name, city }
        });

        await user.addCompany(company)

        return res.json(company);
    },

    async delete(req, res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'O Usuario não foi encontrado' });
        }

        const company = await Company.findOne({
            where: { name }
        });

        await user.removeCompany(company)

        return res.json()

    }
};