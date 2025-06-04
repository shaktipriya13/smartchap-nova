const redis = require('redis');
const config = require('./config');

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password
});

client.on('connect', () => console.log('Redis connected'));
client.on('error', (err) => console.error('Redis error:', err));

module.exports = client;