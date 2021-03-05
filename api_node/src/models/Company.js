const { Model, DataTypes } = require('sequelize');

class Company extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            city: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Area, {
            foreignKey: 'area_id', through: 'company_area', as: 'areas'
        });
        this.hasMany(models.User, { foreignKey: 'user_id', as: 'users' });
    }
}

module.exports = Company;