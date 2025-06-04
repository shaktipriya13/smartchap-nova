// const rateLimit = require('express-rate-limit');
// const RedisStore = require('rate-limit-redis');
// const redisClient = require('../config/redis');

// const limiter = rateLimit({
//     store: new RedisStore({
//         client: redisClient
//     }),
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // 30 requests per IP
//     message: 'Too many requests from this IP, please try again later.'
// });

// module.exports = limiter;

// const rateLimit = require('express-rate-limit');
// const RedisStore = require('rate-limit-redis');
// const redisClient = require('../config/redis');

// const limiter = rateLimit({
//     store: new RedisStore({
//         // Use sendCommand for compatibility with redis v4
//         sendCommand: (...args) => redisClient.sendCommand(args),
//     }),
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // 30 requests per IP
//     message: 'Too many requests from this IP, please try again after a minute.'
// });

// module.exports = limiter;

// The error suggests RedisStore isn’t a constructor, which can happen if the rate - limit - redis package version you’re using has a different API or if there’s a compatibility issue with your Node.js version(20.15.0) or the redis package.Recent versions of rate - limit - redis(e.g., 3.x) require a specific setup, and older code might not work.

// const rateLimit = require('express-rate-limit');
// const { RedisStore } = require('rate-limit-redis');
// const redisClient = require('../config/redis');

// const limiter = rateLimit({
//     store: new RedisStore({
//         client: redisClient, // Pass the Redis client directly
//     }),
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // 30 requests per IP
//     message: 'Too many requests from this IP, please try again after a minute.'
// });

// module.exports = limiter;


// const rateLimit = require('express-rate-limit');
// const { RedisStore } = require('rate-limit-redis');
// const redisClient = require('../config/redis');

// const limiter = rateLimit({
//     store: new RedisStore({
//         client: redisClient, // Pass the Redis client directly
//     }),
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // 30 requests per IP
//     message: 'Too many requests from this IP, please try again after a minute.'
// });

// module.exports = limiter;

// const rateLimit = require('express-rate-limit');
// const RedisStore = require('rate-limit-redis');
// const redisClient = require('../config/redis');

// const limiter = rateLimit({
//     store: new RedisStore({
//         client: redisClient,
//     }),
//     windowMs: 60 * 1000, // 1 minute
//     max: 30, // 30 requests per IP
//     message: 'Too many requests from this IP, please try again after a minute.'
// });

// module.exports = limiter;


const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redisClient = require('../config/redis');

const limiter = rateLimit({
    store: new RedisStore({
        client: redisClient, // Pass the Redis client directly
    }),
    windowMs: 60 * 1000, // 1 minute
    max: 30, // 30 requests per IP
    message: 'Too many requests from this IP, please try again after a minute.'
});

module.exports = limiter;