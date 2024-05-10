const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

class Resource extends Model {}

Resource.init({
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  url: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize,
  modelName: 'Resource',
//   timestamps: false,
});

module.exports = Resource;