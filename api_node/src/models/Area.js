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
        this.hasOne(models.Office, { foreignKey: 'user_id', as: 'offices' });
    }
}

module.exports = Area;