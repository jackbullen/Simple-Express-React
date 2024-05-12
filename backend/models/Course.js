const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

class Course extends Sequelize.Model { }

Course.init(
    {
        pid: {
            type: DataTypes.STRING(30),
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        slug: {
            type: DataTypes.STRING(200),
            allowNull: true,
            unique: true
        },
        program_id: {
            type: DataTypes.STRING(10),
            allowNull: true,
            references: {
                model: 'program',
                key: 'subject_code',
            }
        },
        course_number: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        credit: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        hours: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(15000),
            allowNull: true
        },
        notes: {
            type: DataTypes.STRING(10000),
            allowNull: true
        },
        link: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: 'course',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Course;