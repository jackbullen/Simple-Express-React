const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres', 
});

// const Resource = require('./Resource');

class MyModel extends Model {}

MyModel.init(
    {
        name: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true 
        },
    }, 
    {
        sequelize,
        modelName: 'MyModel',
        timestamps: false, 
    }
);

MyModel.sync({ force: false })
  .then(() => console.log("MyModel table made or exists.\n"))
  .catch(error => console.log('Error: ', error));

// MyModel.hasMany(Resource, { as: 'resources' });
// Resource.belongsTo(MyModel);

module.exports = MyModel;