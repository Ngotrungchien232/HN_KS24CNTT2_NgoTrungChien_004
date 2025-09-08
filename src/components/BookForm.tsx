import React, { useState } from "react";
import "../styles/bookForm.css";



interface BookFormProps {
  onAdd: (title: string) => void;
}

const BookForm = ({ onAdd }: BookFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="Nhập tiêu đề sách mới"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-submit">
       thêm sách 
       
      </button>
    </form>
  );
};

export default BookForm;
