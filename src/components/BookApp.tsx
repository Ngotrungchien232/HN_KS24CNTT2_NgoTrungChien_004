import React, { useState } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import ConfirmModal from "./ConfirmModal";
import "../styles/bookApp.css";
import { BookOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

export interface Book {
  id: number;
  title: string;
}

const BookApp = () => {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "clean code" },
    { id: 2, title: "design pattems" },
    { id: 3, title: "rèactcriing" },
    { id: 4, title: "domain-driven desgin" },
    { id: 5, title: "the pragmatic programmer" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (title: string) => {
    const newBook: Book = {
      id: Math.max(...books.map((b) => b.id), 0) + 1,
      title: title.trim(),
    };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (book: Book) => {
    setBookToDelete(book);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (bookToDelete) {
      setBooks(books.filter((book) => book.id !== bookToDelete.id));
      setBookToDelete(null);
    }
    setShowModal(false);
  };

  const handleEditBook = (book: Book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = (id: number, newTitle: string) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: newTitle.trim() } : book
      )
    );
    setEditingBook(null);
  };

  return (
    <div className="book-app">
      <div className="header">
        <div className="header-content">
          <div className="header-icon"></div>
          <div className="header-text">
            <h1> <BookOutlined />Quản lý sách</h1>
            <p>Quản lý, chỉnh sửa và cập nhật danh sách sách trong hệ thống.</p>
          </div>
        </div>
      </div>


      <BookList
        books={filteredBooks}
        onDelete={handleDeleteBook}
        onEdit={handleEditBook}
        editingBook={editingBook}
        onUpdate={handleUpdateBook}
      />

      <BookForm onAdd={handleAddBook} />

      {showModal && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BookApp;
