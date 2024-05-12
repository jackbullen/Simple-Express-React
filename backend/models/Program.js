const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

class Program extends Sequelize.Model { }

Program.init(
    {
        subject_code: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        subject: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: 'program',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Program;