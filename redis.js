const Redis = require('async-redis');
const redisClient = Redis.createClient({
  url: "rediss://red-ck0vnfkojvrs73a6rcl0:IPOnaaiVqXjL4SMACRbTuuEJQbZhYi8U@singapore-redis.render.com:6379",
  socket: {
    tls: false,
    rejectUnauthorized: false,
  }
});

redisClient.on('error', (error) => {
  console.error(`Redis Error: ${error}`);
});

module.exports = redisClient;
