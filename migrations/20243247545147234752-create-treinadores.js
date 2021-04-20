'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Treinadors',{
    id: { allowNull:false,
      autoIncrement: true,
      primaryKey:true,
      type: Sequelize.INTEGER 
    },
     nome:{
      allowNull:false,
      type: Sequelize.STRING
     },
     idade:{
      allowNull:false ,
      type: Sequelize.STRING
     },
     level:{
      allowNull:false,
      type: Sequelize.STRING
     },
     pokemonpreferido:{
       allowNull:false,
       type:Sequelize.STRING
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
     await queryInterface.dropTable('treinadores');
  }
};
