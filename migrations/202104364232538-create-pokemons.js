'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('pokemons', { 
       id: { 
         allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER 
      },
       numero:{
        allowNull:false,
        type: Sequelize.STRING
       },
       nome:{
        allowNull:false ,
        type: Sequelize.STRING
       },
       tipo:{
        allowNull:false,
        type: Sequelize.STRING
      },
       geracao:{
        allowNull:false,
        type: Sequelize.STRING
       },
       createdAt:{
        type:Sequelize.DATE
       },
       updatedAt:{
        type:Sequelize.DATE
       }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('pokemons');
  }

};
