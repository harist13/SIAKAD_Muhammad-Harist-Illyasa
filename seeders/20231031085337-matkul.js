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
    return queryInterface.bulkInsert('MataKuliahs', [{
      kode_matkul: '01',
      nama: 'Perancangan web',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: '02',
      nama: 'pbo',
      sks: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: '03',
      nama: 'web framework',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: '04',
      nama: 'Design basis data',
      sks: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      kode_matkul: '05',
      nama: 'forensik digital',
      sks: 3,
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
    return queryInterface.bulkDelete('MataKuliahs', null, {})
  }
};
