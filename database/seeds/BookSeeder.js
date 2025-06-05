'use strict'

const Book = use('App/Models/Book')

class BookSeeder {
  async run () {
    await Book.createMany([
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J.K. Rowling',
        year: 1997,
        genre: 'Fantasy',
        description: 'A young wizard discovers his magical heritage on his 11th birthday.',
        price: 15.99,
        pages: 223
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Fiction',
        description: 'A gripping tale of racial injustice and childhood in the American South.',
        price: 12.50,
        pages: 376
      },
      {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian',
        description: 'A dystopian social science fiction novel about totalitarian control.',
        price: 13.99,
        pages: 328
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Classic',
        description: 'A story of decadence and excess in Jazz Age America.',
        price: 11.75,
        pages: 180
      },
      {
        title: 'Clean Code',
        author: 'Robert C. Martin',
        year: 2008,
        genre: 'Programming',
        description: 'A handbook of agile software craftsmanship.',
        price: 45.99,
        pages: 464
      }
    ])
  }
}

module.exports = BookSeeder