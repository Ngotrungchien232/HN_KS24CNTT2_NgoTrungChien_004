import { Book } from "./BookApp";
import React from 'react';
import BookItem from "./BookItem";
import "../styles/bookList.css";

interface BookListProps {
  books: Book[];
  onDelete: (book: Book) => void;
  onEdit: (book: Book) => void;
  editingBook: Book | null;
  onUpdate: (id: number, newTitle: string) => void;
}

const BookList = ({
  books,
  onDelete,
  onEdit,
  editingBook,
  onUpdate,
}: BookListProps) => {
  return (
    <div className="book-list">
      <table className="books-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tiêu đề</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDelete}
              onEdit={onEdit}
              isEditing={editingBook?.id === book.id}
              onUpdate={onUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
