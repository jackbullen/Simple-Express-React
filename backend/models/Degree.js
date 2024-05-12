const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

class Degree extends Sequelize.Model { }

Degree.init(
    {
        code: {
            type: DataTypes.STRING(100),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        cred: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        program_id: {
            type: DataTypes.STRING(10),
            allowNull: true,
            references: {
                model: 'program',
                key: 'subject_code',
            }
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
        link: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        requirements: {
            type: DataTypes.STRING(50000),
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: 'degree',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Degree;