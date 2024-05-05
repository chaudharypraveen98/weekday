import React, { useMemo } from "react";
import MultiSelect from "react-select";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import styles from "./Filters.module.css";
import { useSelector } from "react-redux";
import { capitalizeWords } from "../../utils/commonFunctions";

const Filters = () => {
  const reduxJobList = useSelector((state) => state.jobListing.job);
  const [minSalaryOptions, experienceOptions, companyOptions, roleOptions] =
    useMemo(() => {
      let minSalaryOptions = [],
        experienceOptions = [],
        companyUniqueValue = new Set([]),
        companyOptions = [],
        roleUniqueValue = new Set([]),
        roleOptions = [];

      const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
      numbers?.forEach((exp) => {
        experienceOptions.push({
          label: exp,
          value: exp,
        });
        minSalaryOptions.push({
          label: `$ ${exp * 10}`,
          value: exp * 10,
        });
      });

      reduxJobList?.forEach((jobItem) => {
        companyUniqueValue.add(jobItem?.companyName);
        roleUniqueValue.add(jobItem?.jobRole);
      });
      companyUniqueValue.forEach((value) => {
        companyOptions.push({
          label: capitalizeWords(value),
          value: value,
        });
      });
      roleUniqueValue.forEach((value) => {
        roleOptions.push({
          label: capitalizeWords(value),
          value: value,
        });
      });
      return [minSalaryOptions, experienceOptions, companyOptions, roleOptions];
    }, [reduxJobList]);
  return (
    <div className={styles.filterContainer}>
      <MultiSelect
        defaultValue={[roleOptions[0], roleOptions[1]]}
        isMulti
        name="roles"
        options={roleOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Roles "
      />
      <MultiSelect
        name="experience"
        options={experienceOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Experience"
      />
      <MultiSelect
        name="min-salary"
        options={minSalaryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Minimum Base Pay Salary"
      />

      <Autocomplete
        disablePortal
        id="company-name"
        options={companyOptions}
        sx={{ width: 300, height: 36, lineHeight: "36px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Company Name"
            sx={[
              {
                ">div": {
                  lineHeight: "38px !important",
                  padding: "0px !important",
                },
                " input": {
                  height: "34px !important",
                  padding: "2px 7px !important",
                },
                label: {
                  lineHeight: "1rem !important",
                  marginTop: "-5px",
                },
              },
              { height: 36, lineHeight: "36px" },
            ]}
          />
        )}
      />
    </div>
  );
};
export default Filters;
