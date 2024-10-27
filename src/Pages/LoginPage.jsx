import css from "./LoginPage.module.css";
import icon from "../assets/icon.png";
import iphone from "../assets/iphone.png";
import LoginPageForm from "../components/LoginPageForm/LoginPageForm";

export default function LoginPage() {
  return (
    <div>
      <div className={css.main}>
        <img src={icon} alt="icon" className={css.icon} />
        <h1 className={css.header}>
          Expand your mind, reading <span>a book</span>
        </h1>
        <LoginPageForm />
      </div>
      <div className={css.main}>
        <img src={iphone} alt="iphone" className={css.iphone} />
      </div>
    </div>
  );
}
