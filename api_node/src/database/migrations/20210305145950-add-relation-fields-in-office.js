'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'offices',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      })

    await queryInterface.addColumn(
      'offices',
      'area_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'areas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'offices',
      'user_id',
    )

    await queryInterface.removeColumn(
      'offices',
      'area_id',
    )
  }
};
