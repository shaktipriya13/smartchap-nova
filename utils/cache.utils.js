const redisClient = require('../config/redis');

const getCachedData = async (key) => {
    const data = await redisClient.get(key);
    return data ? JSON.parse(data) : null;
};

const setCachedData = async (key, data, ttl = 3600) => {
    await redisClient.setEx(key, ttl, JSON.stringify(data));
};

const clearCache = async (pattern) => {
    const keys = await redisClient.keys(pattern);
    for (const key of keys) {
        await redisClient.del(key);
    }
};

module.exports = { getCachedData, setCachedData, clearCache };