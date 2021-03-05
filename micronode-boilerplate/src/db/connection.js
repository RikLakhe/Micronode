import knex from 'knex';
import knexConfig from './knexfile';

const connection = knex(knexConfig);

export default connection;
