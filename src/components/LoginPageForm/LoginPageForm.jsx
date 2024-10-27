import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./LoginPageForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data submitted:", values);
    },
  });

  return (
    <form className={css.form} onSubmit={formik.handleSubmit}>
      {formik.touched.name && formik.errors.name ? (
        <div className={css.error}>{formik.errors.name}</div>
      ) : null}

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={css.input}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={css.error}>{formik.errors.email}</div>
      ) : null}

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={css.input}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className={css.error}>{formik.errors.password}</div>
      ) : null}
      <div className={css.commondiv}>
        <button type="submit" className={css.button}>
          Login
        </button>
        <Link to="/" className={css.linktologin}>
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
