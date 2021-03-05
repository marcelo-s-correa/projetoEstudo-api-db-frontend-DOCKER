const { Model, DataTypes } = require('sequelize');

class Office extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            area_id: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.User, { as: 'users' });
        this.belongsTo(models.Area, { foreignKey: 'area_id', as: 'areas' });
    }
}

module.exports = Office;

