// const redis = require('redis');
// const config = require('./config');

// const client = redis.createClient({
//     host: config.redis.host,
//     port: config.redis.port,
//     password: config.redis.password
// });

// client.on('connect', () => console.log('Redis connected'));
// client.on('error', (err) => console.error('Redis error:', err));

// module.exports = client;

// const redis = require('redis');
// const config = require('./config');

// const client = redis.createClient({
//     socket: {
//         host: config.redis.host,
//         port: config.redis.port
//     },
//     password: config.redis.password
// });

// client.on('connect', () => console.log('Redis connected'));
// client.on('error', (err) => console.error('Redis error:', err));

// // Connect to Redis
// client.connect();

// module.exports = client;

// const redis = require('redis');
// const config = require('./config');

// const client = redis.createClient({
//     socket: {
//         host: config.redis.host,
//         port: config.redis.port
//     },
//     password: config.redis.password
// });

// client.on('connect', () => console.log('Redis connected'));
// client.on('error', (err) => console.error('Redis error:', err));

// // Test connection
// (async () => {
//     await client.connect();
//     console.log('Testing Redis connection...');
//     await client.set('test', 'Hello Redis');
//     const value = await client.get('test');
//     console.log('Test value:', value);
//     await client.disconnect();
// })();

// module.exports = client;

// const redis = require('redis');
// const config = require('./config');

// const client = redis.createClient({
//     socket: {
//         host: config.redis.host,
//         port: config.redis.port
//     },
//     password: config.redis.password
// });

// client.on('connect', () => console.log('Redis connected'));
// client.on('error', (err) => console.error('Redis error:', err));

// client.connect().catch(err => console.error('Redis connection failed:', err));

// module.exports = client;

const redis = require('redis');
const config = require('./config');

const client = redis.createClient({
    socket: {
        host: config.redis.host,
        port: config.redis.port
    },
    password: config.redis.password
});

client.on('connect', () => console.log('Redis connected'));
client.on('error', (err) => console.error('Redis error:', err));

// Connect to Redis
client.connect().catch(err => console.error('Redis connection failed:', err));

module.exports = client;