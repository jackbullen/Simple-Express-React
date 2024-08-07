import Resource, { find } from '../models/Resource';

export async function createResource(req, res) {
    try {
        const { name, url, modelId } = req.body;
        const resource = new Resource({ name, url, model: modelId });
        const savedResource = await resource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getResources(req, res) {
    try {
        const resources = await find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}