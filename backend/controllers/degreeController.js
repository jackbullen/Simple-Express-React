const Degree = require('../models/Degree');

exports.getAllDegree = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const offset = (page - 1) * limit;

    try {
        const totalDegrees = await Degree.count();
        const totalPages = Math.ceil(totalDegrees / limit);
        const degrees = await Degree.findAll({
            limit: limit,
            offset: offset,
        });
        res.status(200).json({
            page: page,
            total: totalPages,
            degrees: degrees
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}