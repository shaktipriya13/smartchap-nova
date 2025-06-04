const Chapter = require('../models/Chapter.model.js');

const parseAndValidateChapters = async (fileBuffer) => {
    const chapters = JSON.parse(fileBuffer.toString());
    const failedChapters = [];
    const validChapters = [];

    for (const chapter of chapters) {
        try {
            const validatedChapter = await Chapter.validate(chapter);
            validChapters.push(chapter);
        } catch (error) {
            failedChapters.push({ chapter, error: error.message });
        }
    }

    return { validChapters, failedChapters };
};

module.exports = { parseAndValidateChapters };