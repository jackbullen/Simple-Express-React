const Course = require('../models/Course');

exports.getAllCourse = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 10;
    const offset = (page - 1) * limit;

    try {
        const totalCourses = await Course.count();
        const totalPages = Math.ceil(totalCourses / limit);
        const courses = await Course.findAll({
            limit: limit,
            offset: offset,
        });
        res.status(200).json({
            page: page,
            total: totalPages,
            courses: courses
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}