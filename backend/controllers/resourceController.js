const Resource = require('../models/Resource');

exports.createResource = async (req, res) => {
    try {
        const { name, url, modelId } = req.body;
        const resource = new Resource({ name, url, model: modelId });
        const savedResource = await resource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};