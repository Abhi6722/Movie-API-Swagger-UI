const Redis = require('async-redis');
const redisClient = Redis.createClient({
  URL: process.env.REDIS_URL,
});

redisClient.on('error', (error) => {
  console.error(`Redis Error: ${error}`);
});

module.exports = redisClient;
