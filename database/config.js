// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    dialect: process.env.DB_DIALECT || "mysql",
};
