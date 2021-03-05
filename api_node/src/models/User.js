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
        this.belongsTo(models.Office, { foreignKey: 'office_id', as: 'offices' });
        this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'companies' });
    }
}

module.exports = User;