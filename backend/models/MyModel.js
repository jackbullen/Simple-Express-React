const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const Model = Sequelize.Model;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

class MyModel extends Model { }

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

module.exports = MyModel;