import React from "react";
import MultiSelect from "react-select";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import styles from "./Filters.module.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
const Filters = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterRow}>
        <MultiSelect
          defaultValue={[options[0], options[1]]}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <MultiSelect
          defaultValue={options[0]}
          name="colors1"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <MultiSelect
          defaultValue={options[0]}
          name="colors2"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div className={styles.filterRow}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </div>
    </div>
  );
};
export default Filters;
