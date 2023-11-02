'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Dosens', [{
      nidn: '123',
      nama: 'pak putut',
      alamat: 'jl sambaliung',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: '456',
      nama: 'pak hario',
      alamat: 'jl ahmad dahlan',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: '789',
      nama: 'pak irsyad',
      alamat: 'jl grogot 3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: '101112',
      nama: 'bu septya',
      alamat: 'Perum polda',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nidn: '131415',
      nama: 'bu dyana',
      alamat: 'jl m yamin',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Dosens', null, {})
  }
};
