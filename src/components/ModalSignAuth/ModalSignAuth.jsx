import css from "./ModalSignAuth.module.css";

export const ModalSignAuth = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalSignAuth;
