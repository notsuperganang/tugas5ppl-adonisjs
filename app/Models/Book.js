'use strict'

const Model = use('Model')

class Book extends Model {
  // Jika nama tabel berbeda dengan nama model
  static get table () {
    return 'books'
  }

  // Definisi field yang bisa diisi
  static get fillable () {
    return ['title', 'author', 'year', 'genre', 'description', 'price', 'pages']
  }

  // Validasi rules
  static get rules () {
    return {
      title: 'required|string|max:200',
      author: 'required|string|max:100',
      year: 'required|integer|min:1000|max:9999',
      genre: 'required|string|max:50',
      description: 'string',
      price: 'number',
      pages: 'integer'
    }
  }
}

module.exports = Book