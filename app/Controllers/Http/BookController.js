'use strict'

const Book = use('App/Models/Book')
const { validate } = use('Validator')

class BookController {
  
  // GET /books - Tampilkan semua buku
  async index ({ response }) {
    try {
      const books = await Book.all()
      
      return response.status(200).json({
        success: true,
        message: 'Data buku berhasil diambil',
        data: books
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal mengambil data buku',
        error: error.message
      })
    }
  }

  // GET /books/:id - Tampilkan buku berdasarkan ID
  async show ({ params, response }) {
    try {
      const book = await Book.find(params.id)
      
      if (!book) {
        return response.status(404).json({
          success: false,
          message: 'Buku tidak ditemukan'
        })
      }

      return response.status(200).json({
        success: true,
        message: 'Data buku berhasil diambil',
        data: book
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal mengambil data buku',
        error: error.message
      })
    }
  }

  // POST /books - Tambah buku baru
  async store ({ request, response }) {
    try {
      const rules = {
        title: 'required|string|max:200',
        author: 'required|string|max:100',
        year: 'required|integer',
        genre: 'required|string|max:50'
      }

      const validation = await validate(request.all(), rules)

      if (validation.fails()) {
        return response.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: validation.messages()
        })
      }

      const bookData = request.only([
        'title', 'author', 'year', 'genre', 'description', 'price', 'pages'
      ])

      const book = await Book.create(bookData)

      return response.status(201).json({
        success: true,
        message: 'Buku berhasil ditambahkan',
        data: book
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal menambahkan buku',
        error: error.message
      })
    }
  }

  // PUT /books/:id - Update buku
  async update ({ params, request, response }) {
    try {
      const book = await Book.find(params.id)
      
      if (!book) {
        return response.status(404).json({
          success: false,
          message: 'Buku tidak ditemukan'
        })
      }

      const rules = {
        title: 'string|max:200',
        author: 'string|max:100', 
        year: 'integer',
        genre: 'string|max:50'
      }

      const validation = await validate(request.all(), rules)

      if (validation.fails()) {
        return response.status(400).json({
          success: false,
          message: 'Data tidak valid',
          errors: validation.messages()
        })
      }

      const bookData = request.only([
        'title', 'author', 'year', 'genre', 'description', 'price', 'pages'
      ])

      book.merge(bookData)
      await book.save()

      return response.status(200).json({
        success: true,
        message: 'Buku berhasil diupdate',
        data: book
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal mengupdate buku',
        error: error.message
      })
    }
  }

  // DELETE /books/:id - Hapus buku
  async destroy ({ params, response }) {
    try {
      const book = await Book.find(params.id)
      
      if (!book) {
        return response.status(404).json({
          success: false,
          message: 'Buku tidak ditemukan'
        })
      }

      await book.delete()

      return response.status(200).json({
        success: true,
        message: 'Buku berhasil dihapus'
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal menghapus buku',
        error: error.message
      })
    }
  }

  // GET /books/search - Cari buku berdasarkan judul atau penulis
  async search ({ request, response }) {
    try {
      const { q } = request.get()
      
      if (!q) {
        return response.status(400).json({
          success: false,
          message: 'Parameter pencarian tidak boleh kosong'
        })
      }

      const books = await Book.query()
        .where('title', 'LIKE', `%${q}%`)
        .orWhere('author', 'LIKE', `%${q}%`)
        .fetch()

      return response.status(200).json({
        success: true,
        message: 'Hasil pencarian buku',
        data: books,
        query: q
      })
    } catch (error) {
      return response.status(500).json({
        success: false,
        message: 'Gagal mencari buku',
        error: error.message
      })
    }
  }
}

module.exports = BookController