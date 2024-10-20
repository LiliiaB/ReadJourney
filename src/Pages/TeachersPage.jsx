import TeachersList from "../components/TeachersList/TeachersList";
import { useCallback, useEffect, useState } from "react";
import css from "./TeachersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../redux/teachers/operations";
import { selectTeachers, selectError } from "../redux/teachers/selectors";
import SearchBar from "../components/SearchBar/SearchBar";

export default function TeachersPage() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const error = useSelector(selectError);

  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const handleFilterChange = useCallback((filtered) => {
    setFilteredTeachers(filtered);
  }, []);

  return (
    <div className={css.gallery}>
      {error && <p>Some error happened</p>}
      <SearchBar teachersData={teachers} onFilterChange={handleFilterChange} />
      <TeachersList
        teachers={filteredTeachers.length ? filteredTeachers : teachers}
      />
    </div>
  );
}
