import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/v1/books";

const BOOK_SEARCH_API = "AIzaSyCljUqFtfpapoZazIwmCjOzTIyTUf2Xv2Q";

class BookService {
    getBooks() {
        return axios.get(BOOK_API_BASE_URL);
    }

    createBook(book) {
        return axios.post(BOOK_API_BASE_URL, book);
    }


    getBookById(id) {
        return axios.get(BOOK_API_BASE_URL + '/' + id);
    }

    updateBook(id, book) {
        return axios.put(BOOK_API_BASE_URL + '/' + id, book);
    }

    deleteBook(id) {
        return axios.delete(BOOK_API_BASE_URL + '/' + id);
    }

    searchBooks() {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key`)
        .then(response => response.json())
        .then(result => {
      this.setState({ books: result.items})
      })
    }
}

export default new BookService();