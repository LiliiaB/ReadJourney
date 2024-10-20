import { useState, useEffect } from "react";
import Select from "react-select";
import css from "./SearchBar.module.css";

const SearchBar = ({ teachersData, onFilterChange }) => {
  const [languageFilter, setLanguageFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);

  useEffect(() => {
    const filteredTeachers = teachersData.filter((teacher) => {
      const languageMatch =
        !languageFilter || teacher.languages.includes(languageFilter);
      const levelMatch = !levelFilter || teacher.levels.includes(levelFilter);
      const priceMatch =
        !priceFilter || teacher.price_per_hour <= Number(priceFilter);

      return languageMatch && levelMatch && priceMatch;
    });

    onFilterChange(filteredTeachers);
  }, [languageFilter, levelFilter, priceFilter, teachersData, onFilterChange]);

  const handleLanguageChange = (selectedOption) => {
    setLanguageFilter(selectedOption ? selectedOption.value : "");
  };

  const handleLevelChange = (selectedOption) => {
    setLevelFilter(selectedOption ? selectedOption.value : "");
  };

  const handlePriceChange = (selectedOption) => {
    setPriceFilter(selectedOption ? selectedOption.value : "");
  };

  return (
    <div className={css.form}>
      <div className={css.filter}>
        <label htmlFor="language" className={css.label}>
          Languages
        </label>
        <Select
          options={[
            { value: "French", label: "French" },
            { value: "English", label: "English" },
            { value: "German", label: "German" },
            { value: "Italian", label: "Italian" },
          ]}
          isClearable
          onChange={handleLanguageChange}
        />
      </div>
      <div className={css.filter}>
        <label htmlFor="level" className={css.label}>
          Level of knowledge
        </label>
        <Select
          options={[
            { value: "A1", label: "A1 Beginner" },
            { value: "A2", label: "A2 Elementary" },
            { value: "B1", label: "B1 Intermediate" },
            { value: "B2", label: "B2 Upper-Intermediate" },
          ]}
          isClearable
          onChange={handleLevelChange}
        />
      </div>
      <div className={css.filter}>
        <label htmlFor="price" className={css.label}>
          Price
        </label>
        <Select
          options={[
            { value: "10", label: "10$" },
            { value: "20", label: "20$" },
            { value: "30", label: "30$" },
            { value: "40", label: "40$" },
          ]}
          isClearable
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
