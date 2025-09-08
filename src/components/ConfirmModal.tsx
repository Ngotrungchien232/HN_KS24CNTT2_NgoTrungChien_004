import "../styles/confirmModal.css";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ onConfirm, onCancel }: ConfirmModalProps) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onCancel}>
          <CloseCircleOutlined />
        </button>
        <div className="modal-body">
          <p>Bạn chắc chắn muốn xóa?</p>
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-button" onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
