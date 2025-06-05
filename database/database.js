'use strict'

const Env = use('Env')

module.exports = {
  connection: Env.get('DB_CONNECTION', 'mysql'),

  mysql: {
    client: 'mysql2', 
    connection: {
      host: Env.get('DB_HOST', 'localhost'),
      port: Env.get('DB_PORT', '3306'),
      user: Env.get('DB_USER', 'root'),
      password: Env.get('DB_PASSWORD', ''),
      database: Env.get('DB_DATABASE', 'books_api')
    },
    debug: false
  }
}