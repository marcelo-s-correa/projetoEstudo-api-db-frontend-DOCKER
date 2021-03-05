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
        this.hasMany(models.User, { foreignKey: 'user_id', as: 'users' });
        this.belongsTo(models.Area, { foreignKey: 'area_id', as: 'areas' });
    }
}

module.exports = Office;

