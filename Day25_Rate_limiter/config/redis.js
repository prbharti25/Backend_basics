const redis = require("redis");

const redisClient = redis.createClient({
    username: 'default',
    password: '0hgJ651ZMkGowSBN8xPht76grxzxuqc4',
    socket: {
        host: 'turboquiet-plough-steam-47364.db.redis.io',
        port: 10067
    }
});

// redisClient.on("error", (err) => {
//     console.error("Redis Error:", err);
// });

// redisClient.on("connect", () => {
//     console.log("Redis Connected");
// });

// redisClient.on("ready", () => {
//     console.log("Redis Ready");
// });

module.exports = redisClient;