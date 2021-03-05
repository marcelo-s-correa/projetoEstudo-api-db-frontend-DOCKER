const { Model, DataTypes } = require('sequelize');

class Area extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Area, {
            foreignKey: 'company_id', through: 'company_area', as: 'companies'
        });
        this.hasMany(models.Office, { foreignKey: 'office_id', as: 'offices' });
    }
}

module.exports = Area;