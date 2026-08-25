const redis = require("redis");

const redisClient = redis.createClient({
    username: 'default',
    password: '0hgJ651ZMkGowSBN8xPht76grxzxuqc4',
    socket: {
        host: 'turboquiet-plough-steam-47364.db.redis.io',
        port: 10067
    }
});


module.exports = redisClient;
  