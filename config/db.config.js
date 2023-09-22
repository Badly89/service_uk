module.exports = {
    HOST: "10.31.8.53",
    USER: "postgres",
    PASSWORD: "Rekmnehf89",
    DB: "service_uk",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};