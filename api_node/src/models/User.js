const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            city: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasOne(models.Office, { foreignKey: 'user_id', as: 'offices' });
    }
}

module.exports = User;