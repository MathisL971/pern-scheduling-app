const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "BrebeufMTL5174",
    host: "localhost",
    port: 5432,
    database: "pernscheduling"
});

module.exports = pool;