const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Company = require('../models/Company');
const Office = require('../models/Office');
const Area = require('../models/Area');

const connection = new Sequelize(dbConfig);


User.init(connection)
Company.init(connection)
Office.init(connection)
Area.init(connection)

// User.associate(connection.models);
// Company.associate(connection.models);
// Office.associate(connection.models);
// Area.associate(connection.models);

module.exports = connection;