'use strict'

const Route = use('Route')

// Welcome route
Route.get('/', () => {
  return { 
    message: 'Welcome to Books API',
    version: '1.0.0',
    endpoints: {
      'GET /books': 'Get all books',
      'GET /books/:id': 'Get book by ID',
      'POST /books': 'Create new book',
      'PUT /books/:id': 'Update book',
      'DELETE /books/:id': 'Delete book',
      'GET /books/search': 'Search books'
    }
  }
})

// Books routes
Route.group(() => {
  Route.get('books', 'BookController.index')
  Route.get('books/search', 'BookController.search')
  Route.get('books/:id', 'BookController.show')
  Route.post('books', 'BookController.store')
  Route.put('books/:id', 'BookController.update')
  Route.delete('books/:id', 'BookController.destroy')
}).prefix('api/v1')

// Alternative routes tanpa prefix (untuk testing sederhana)
Route.get('books', 'BookController.index')
Route.get('books/search', 'BookController.search')
Route.get('books/:id', 'BookController.show')
Route.post('books', 'BookController.store')
Route.put('books/:id', 'BookController.update')
Route.delete('books/:id', 'BookController.destroy')