import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Modalbooktrial.module.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "60vw",
    maxHeight: "60vh",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  reason: Yup.string().required("Please select a reason"),
});

function Modalbooktrial({ isModalOpen, closeModal, teacher }) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    reason: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Book Trial Lesson Modal"
      style={customStyles}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={css.mainmodal}>
            <h2>Book trial lesson</h2>
            <p>
              Our experienced tutor will assess your current language level,
              discuss your learning goals, and tailor the lesson to your
              specific needs.
            </p>
            <div>
              <p>Your teacher</p>
              {teacher ? (
                <div className={css.fotobox}>
                  <img
                    src={teacher.avatar_url}
                    alt={`${teacher.name} ${teacher.surname}`}
                    className={css.foto}
                  />
                  <h4>
                    {teacher.name} {teacher.surname}
                  </h4>
                </div>
              ) : (
                <p>Loading teacher information...</p>
              )}
            </div>
            <h3>What is your main reason for learning?</h3>
            <div>
              <fieldset className={css.fieldset}>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="career"
                  />
                  <label htmlFor="career"> Career and Business</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="kids"
                  />
                  <label htmlFor="kids"> Lesson for kids</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="abroad"
                  />
                  <label htmlFor="abroad"> Living abroad</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="exams"
                  />
                  <label htmlFor="exams"> Exams and courses</label>
                </div>
                <div>
                  <input
                    className={css.input}
                    type="radio"
                    name="reason"
                    value="travel"
                  />

                  <label htmlFor="travel"> Culture, travel or hobby</label>
                </div>
              </fieldset>
            </div>

            <div>
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                className={css.field}
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div>
              <Field
                type="text"
                name="phone"
                placeholder="Phone number"
                className={css.field}
              />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: "red" }}
              />
            </div>
            <button className={css.bookbtn} type="submit">
              Book
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
export default Modalbooktrial;
