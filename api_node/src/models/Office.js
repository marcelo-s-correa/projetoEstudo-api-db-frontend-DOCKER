const { Model, DataTypes } = require('sequelize');

class Office extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'office_id', as: 'users' });
        this.hasOne(models.Area, { foreignKey: 'office_id', as: 'areas' });
    }
}

module.exports = Office;

