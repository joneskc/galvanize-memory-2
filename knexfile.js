// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize-coffee'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-galvanize-coffee'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
