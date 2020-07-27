// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    /*version: '7.4.6',
      connection: {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'horus'
      }*/
      connection: {
        filename: './src/database/horus.sqlite'
      },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
