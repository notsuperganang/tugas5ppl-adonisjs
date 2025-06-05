'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('title', 200).notNullable()
      table.string('author', 100).notNullable()
      table.integer('year').notNullable()
      table.string('genre', 50).notNullable()
      table.text('description').nullable()
      table.decimal('price', 10, 2).nullable()
      table.integer('pages').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema