'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MahasiswaBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   // models/mahasiswabimbingan.js

static associate(models) {
  MahasiswaBimbingan.belongsTo(models.Mahasiswa, {
    foreignKey: 'id_mahasiswa',
    as: 'Mahasiswa',
  });

  MahasiswaBimbingan.belongsTo(models.Dosen, {
    foreignKey: 'id_dosen',
    as: 'Dosen',
  });
}

  }
  MahasiswaBimbingan.init({
    id_mahasiswa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Mahasiswas',
        key: 'id'
      }
    },
    id_dosen: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Dosens',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'MahasiswaBimbingan',
  });
  return MahasiswaBimbingan;
};