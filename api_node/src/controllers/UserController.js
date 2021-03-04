const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name, age, city } = req.body;

        const user = await User.create({ name, age, city });

        return res.json(user);
    }
};