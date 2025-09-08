import React,{ useState } from "react";
import { Book } from "./BookApp";
import "../styles/bookItem.css";
import { DeleteOutlined } from "@ant-design/icons";
import { ToolOutlined } from "@ant-design/icons";
import { CheckOutlined } from "@ant-design/icons";
import { CloseOutlined } from "@ant-design/icons";
interface BookItemProps {
  book: Book;
  onDelete: (book: Book) => void;
  onEdit: (book: Book) => void;
  isEditing: boolean;
  onUpdate: (id: number, newTitle: string) => void;
}

const BookItem = ({
  book,
  onDelete,
  onEdit,
  isEditing,
  onUpdate,
}: BookItemProps) => {
  const [editTitle, setEditTitle] = useState(book.title);

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(book.id, editTitle);
    }
  };

  const handleCancel = () => {
    setEditTitle(book.title);
    onEdit({ id: 0, title: "" }); 
  };

  return (
    <tr>
      <td>{book.id}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="edit-input"
            autoFocus
          />
        ) : (
          book.title
        )}
      </td>
      <td>
        <div className="action-buttons">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn">
                <CheckOutlined />
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                <CloseOutlined />
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onEdit(book)} className="edit-btn">
               <ToolOutlined />
              </button>
              <button onClick={() => onDelete(book)} className="delete-btn">
               <DeleteOutlined />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default BookItem;
