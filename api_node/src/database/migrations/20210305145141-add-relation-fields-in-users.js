'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'company_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'companies', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      })

    await queryInterface.addColumn(
      'users',
      'office_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'offices', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'users',
      'company_id',
    )

    await queryInterface.removeColumn(
      'users',
      'office_id',
    )
  }
};
