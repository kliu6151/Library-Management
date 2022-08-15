package com.libraryManage.LibraryManagementBackend.controller;

import com.libraryManage.LibraryManagementBackend.exception.ResourceNotFoundException;
import com.libraryManage.LibraryManagementBackend.model.Book;
import com.libraryManage.LibraryManagementBackend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    //Get all books
    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    //Add a book
    @PostMapping("/books")
    public Book createBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    //get a book via id
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Book book = bookRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("no books exist with id: " + id));
        return ResponseEntity.ok(book);
    }

    //Update book
    @PutMapping("/books/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id,@RequestBody Book bookDetails) {
        Book book = bookRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("no books exist with id: " + id));
        book.setTitle(bookDetails.getTitle());
        book.setAuthor(bookDetails.getAuthor());
        book.setDescription(bookDetails.getDescription());

        Book updatedBook = bookRepository.save(book);
        return ResponseEntity.ok(updatedBook);
    }

    //Delete book
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id) {
        Book book = bookRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("no books exist with id: " + id));

        bookRepository.delete(book);
        Map<String, Boolean> resp = new HashMap<>();
        resp.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(resp);
    }
}
