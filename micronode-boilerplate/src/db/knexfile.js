// Update with your config settings.
require('dotenv').config({
  path: __dirname + '/../../.env'
});

let connection = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
}

if (process.env.NODE_ENV === "production") {
  connection = {
    ...connection,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  }
}

module.exports = {
  connection,
  client: 'pg',
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};