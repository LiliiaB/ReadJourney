import css from "./SectionHero.module.css";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";

export const SectionHero = () => {
  return (
    <div className={css.hero}>
      <div className={css.heromain}>
        <div className={css.section1}>
          <h1 className={css.herotitle}>
            Unlock your potential with the best{" "}
            <span className={css.herospan}>language</span> tutors
          </h1>
          <p className={css.herotext}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <Link to="/teachers" className={css.herobtn}>
            Get started
          </Link>
        </div>
        <div className={css.heroimage}>
          <img src={hero} alt="woman with macbook" />
        </div>
      </div>
      <div className={css.underherosection}>
        <div className={css.stat}>
          <h2>32,000 +</h2>
          <p>
            Experienced <br />
            Tutors
          </p>
        </div>
        <div className={css.stat}>
          <h2>300,000 +</h2>
          <p>
            5-Star tutor <br />
            Reviews
          </p>
        </div>
        <div className={css.stat}>
          <h2>120 +</h2>
          <p>
            Subjects <br />
            taught
          </p>
        </div>
        <div className={css.stat}>
          <h2>200 +</h2>
          <p>
            Tutor <br />
            nationalities
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
