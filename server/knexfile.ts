import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        // __dirname - retorna o local onde esta sendo executado o resolver.
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};

// Para eecutar a migration use: npx knex migrate:latest --knexfile knexfile.ts migrate:latest

// parei em 1:00