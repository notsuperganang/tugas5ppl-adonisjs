'use strict'

class Cors {
  async handle ({ response }, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    
    await next()
  }
}

module.exports = Cors