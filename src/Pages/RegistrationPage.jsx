import css from "./RegistrationPage.module.css";
import icon from "../assets/icon.png";
import iphone from "../assets/iphone.png";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div>
      <div className={css.main}>
        <img src={icon} alt="icon" className={css.icon} />
        <h1 className={css.header}>
          Expand your mind, reading <span>a book</span>
        </h1>
        <RegistrationForm />
      </div>
      <div className={css.main}>
        <img src={iphone} alt="iphone" className={css.iphone} />
      </div>
    </div>
  );
}
