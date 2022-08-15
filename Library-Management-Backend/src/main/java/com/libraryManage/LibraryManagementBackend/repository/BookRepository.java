package com.libraryManage.LibraryManagementBackend.repository;

import com.libraryManage.LibraryManagementBackend.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//JpaRepository provides a lot of methods like findAll
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
