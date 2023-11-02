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

    return queryInterface.bulkInsert('Mahasiswas', [{
      nim: '2109116101',
      nama: 'Muhammad Harist Illyasa',
      alamat: 'perjuangan 7',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '2109116088',
      nama: 'syahrul',
      alamat: 'djuanda 7',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '2109116102',
      nama: 'Romy hakim wardhana',
      alamat: 'perum 7',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '2109116103',
      nama: 'utari widya ardhana',
      alamat: 'jalan perjuangan 8',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nim: '2109116107',
      nama: 'rayhan',
      alamat: 'jl pramuka',
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
    return queryInterface.bulkDelete('Mahasiswas', null, {})
  }
};
