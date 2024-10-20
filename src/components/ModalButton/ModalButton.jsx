import css from "./ModalButton.module.css";

export const ModalButton = ({ openModal }) => {
  return (
    <div>
      <button onClick={openModal} className={css.trialbtn}>
        Book trial lesson
      </button>
    </div>
  );
};

export default ModalButton;
