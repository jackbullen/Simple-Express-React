const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

class User extends Model {
    async verifyPassword(password) {
        try {
            return await bcrypt.compare(password, this.passwordHash);
        } catch (error) {
            throw error;
        }
    }
}

User.init(
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 255],
            },
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        learning: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
        },
        teaching: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

User.sync({ force: false })
    .then(() => console.log("User table made or exists.\n"))
    .catch(error => console.log('Error: ', error));

module.exports = User;