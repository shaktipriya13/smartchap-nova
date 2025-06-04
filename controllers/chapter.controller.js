
const Chapter = require('../models/Chapter.model.js');
const { getCachedData, setCachedData, clearCache } = require('../utils/cache.utils.js');
const { parseAndValidateChapters } = require('../utils/fileParser.utils.js');

// exports.getAllChapters = async (req, res, next) => {
//     try {
//         const { subject, class: className, unit, status, isWeakChapter, page = 1, limit = 10 } = req.query;
//         const query = {};
//         if (subject) query.subject = subject;
//         if (className) query.class = className;
//         if (unit) query.unit = unit;
//         if (status) query.status = status;
//         if (isWeakChapter) query.isWeakChapter = isWeakChapter === 'true';

//         const cacheKey = `chapters:${JSON.stringify(req.query)}`;
//         const cachedData = await getCachedData(cacheKey);
//         if (cachedData) return res.json(cachedData);

//         const skip = (page - 1) * limit;
//         const chapters = await Chapter.find(query).skip(skip).limit(Number(limit));
//         const total = await Chapter.countDocuments(query);

//         const response = { chapters, total, page: Number(page), limit: Number(limit) };
//         await setCachedData(cacheKey, response, 3600); // Cache for 1 hour

//         res.json(response);
//     } catch (error) {
//         next(error);
//     }
// };


exports.getAllChapters = async (req, res, next) => {
    try {
        const { subject, class: className, unit, status, isWeakChapter, page = 1, limit = 10 } = req.query;
        const query = {};
        if (subject) query.subject = subject;
        if (className) query.class = className;
        if (unit) query.unit = unit;
        if (status) query.status = status;
        if (isWeakChapter) query.isWeakChapter = isWeakChapter === 'true';

        // Create a unique cache key based on query parameters
        const cacheKey = `chapters:${JSON.stringify(req.query)}`;
        const cachedData = await getCachedData(cacheKey);
        if (cachedData) {
            console.log('Serving from Redis cache');
            return res.json(cachedData);
        }

        const skip = (page - 1) * limit;
        const chapters = await Chapter.find(query).skip(skip).limit(Number(limit));
        const total = await Chapter.countDocuments(query);

        const response = { chapters, total, page: Number(page), limit: Number(limit) };
        await setCachedData(cacheKey, response, 3600); // Cache for 1 hour

        res.json(response);
    } catch (error) {
        next(error);
    }
};
exports.getChapterById = async (req, res, next) => {
    try {
        const chapter = await Chapter.findById(req.params.id);
        if (!chapter) return res.status(404).json({ error: 'Chapter not found' });
        res.json(chapter);
    } catch (error) {
        next(error);
    }
};

exports.uploadChapters = async (req, res, next) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

        const { validChapters, failedChapters } = await parseAndValidateChapters(req.file.buffer);
        const savedChapters = await Chapter.insertMany(validChapters, { ordered: false });

        await clearCache('chapters:*'); // Clear cache on upload

        res.json({
            success: savedChapters.length,
            failed: failedChapters.length,
            failedChapters
        });
    } catch (error) {
        next(error);
    }
};