const MyModel = require('../models/MyModel');

exports.createMyModel = async (req, res) => {
    try {
        const { name } = req.body;
        const newMyModel = await MyModel.create({ name });
        res.status(201).json(newMyModel);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the MyModel in controllers.js');
    }
}

exports.getAllMyModels = async (req, res) => {
    try {
        const myModels = await MyModel.findAll();
        res.status(200).json(myModels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}