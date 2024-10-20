import css from "./TeachersList.module.css";
import { useState } from "react";
import bookopen from "../../assets/bookopen.png";
import vector from "../../assets/vector.png";
import star from "../../assets/star.png";
import heart from "../../assets/heart.png";
import avatar from "../../assets/avatar.png";
import ModalButton from "../ModalButton/ModalButton";
import Modalbooktrial from "../Modal/Modalbooktrial";

export const TeachersList = ({ teachers }) => {
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const openModal = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeacher(null);
  };

  const toggleExpand = (id) => {
    setExpandedTeacherId(expandedTeacherId === id ? null : id);
  };

  return (
    <div>
      <ul className={css.main}>
        {teachers.map((teacher) => (
          <li key={teacher.id} className={css.card}>
            <div>
              <img src={teacher.avatar_url} alt="foto" className={css.img} />
            </div>
            <div className={css.cardtext}>
              <div className={css.teacherrating}>
                <p>
                  <img className={css.icon} src={bookopen} alt="bookicon" />{" "}
                  <span className={css.spantext}>Lessions online {""}</span>
                  <img className={css.vector} src={vector} />
                </p>
                <p>
                  <span className={css.spantext}>
                    Lessions done: {teacher.lessons_done}
                  </span>{" "}
                  <img className={css.vector} src={vector} />
                </p>
                <p className={css.spantext}>
                  <img className={css.icon} src={star} alt="staricon" /> {""}
                  <span>Rating: {teacher.rating}</span> {""}
                  <img className={css.vector} src={vector} />
                </p>
                <p>
                  <span>
                    Price / 1 hour:{" "}
                    <span className={css.green}>{teacher.price_per_hour}$</span>
                  </span>{" "}
                  {""}
                </p>
                <img src={heart} alt="heart" className={css.heart} />
              </div>

              <p className={css.name}>
                {teacher.name} {teacher.surname}
              </p>
              <p className={css.p}>
                <span className={css.span}>Speaks:</span>{" "}
                {teacher.languages.join(", ")}
              </p>
              <p className={css.p}>
                <span className={css.span}>Lesson info:</span>{" "}
                {teacher.lesson_info}
              </p>
              <p className={css.p}>
                <span className={css.span}>Conditions:</span>{" "}
                {teacher.conditions}
              </p>
              <button
                className={css.btn}
                onClick={() => toggleExpand(teacher.id)}
              >
                {expandedTeacherId === teacher.id ? "Read less" : "Read more"}
              </button>
              {expandedTeacherId === teacher.id && (
                <div className={css.expandedContent}>
                  <p>{teacher.experience}</p>
                  <ul className={css.reviewList}>
                    {teacher.reviews.map((review, index) => (
                      <li key={index} className={css.reviewItem}>
                        <div className={css.reviewerInfo}>
                          <img
                            className={css.reviewerPhoto}
                            src={avatar}
                            alt={review.reviewer_foto}
                          />
                          <p className={css.reviewerName}>
                            {review.reviewer_name}
                          </p>
                        </div>
                        <p className={css.reviewerRating}>
                          <img className={css.icon} src={star} alt="staricon" />{" "}
                          {review.reviewer_rating}
                        </p>
                        <p className={css.comment}>{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                  <ModalButton openModal={() => openModal(teacher)} />
                  <Modalbooktrial
                    isModalOpen={isModalOpen}
                    closeModal={closeModal}
                    teacher={selectedTeacher}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
