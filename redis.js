const Redis = require('async-redis');
const redisClient = Redis.createClient();

redisClient.on('error', (error) => {
  console.error(`Redis Error: ${error}`);
});

module.exports = redisClient;
