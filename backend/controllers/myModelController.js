import { create, findAll } from '../models/MyModel';

export async function createMyModel(req, res) {
    try {
        const { name } = req.body;
        const newMyModel = await create({ name });
        res.status(201).json(newMyModel);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the MyModel in controllers.js');
    }
}

export async function getMyModels(req, res) {
    try {
        const myModels = await findAll();
        res.status(200).json(myModels);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}