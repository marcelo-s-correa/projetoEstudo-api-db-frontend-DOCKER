module.exports = {
    username: 'admin',
    password: 'vigortech',
    port: 5433,
    port_mapping: '5433:5432',
    database: 'data',
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
    },
};
