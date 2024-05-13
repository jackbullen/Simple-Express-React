const Program = require('../models/Program');

exports.createProgram = async (req, res) => {
    try {
        const { name } = req.body;
        const newProgram = await Program.create({ name });
        res.status(201).json(newProgram);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the Program in controllers.js');
    }
}

exports.getAllProgram = async (req, res) => {
    try {
        const programs = await Program.findAll();
        res.status(200).json({
            count: programs.length,
            programs: programs,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}