import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL);

class Resource extends Model { }

Resource.init({
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    url: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'Resource',
    //   timestamps: false,
});

// Resource.sync({ force: false })
//     .then(() => console.log("Resource table made or exists.\n"))
//     .catch(error => console.log('Error: ', error));

export default Resource;