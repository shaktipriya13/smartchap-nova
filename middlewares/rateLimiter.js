const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redisClient = require('../config/redis');

const limiter = rateLimit({
    store: new RedisStore({
        client: redisClient
    }),
    windowMs: 60 * 1000, // 1 minute
    max: 30, // 30 requests per IP
    message: 'Too many requests from this IP, please try again later.'
});

module.exports = limiter;