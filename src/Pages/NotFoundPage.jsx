import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.notfound}>
      <p>Page not found</p>
      <Link to="/">Click here to go back</Link>
    </div>
  );
}
