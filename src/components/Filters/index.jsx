import React, { useMemo } from "react";
import Select from "react-select";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { capitalizeWords } from "../../utils/commonFunctions";
import { createFilteredJobList } from "../../redux/reducers/JobReducer";

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

  const dispatch = useDispatch();
  function handleFilterChange(filterName, values) {
    const data = reduxJobList;
    let filteredData;
    switch (filterName) {
      case "roles": {
        const filterTestData = values?.map((val) => val?.value);
        filteredData = data.filter((item) => {
          return filterTestData.includes(item.jobRole);
        });
        break;
      }
      case "experience":
        filteredData = data.filter((item) => values?.value <= item.minExp);
        break;
      case "salary":
        filteredData = data.filter((item) => values?.value <= item.minJdSalary);
        break;
      case "company name":
        console.log("values", values);
        filteredData = data.filter((item) =>
          item.companyName.toLowerCase().includes(values?.value.toLowerCase())
        );
        break;
      default:
        filteredData = data;
        break;
    }
    dispatch(createFilteredJobList(filteredData));
  }
  return (
    <div className={styles.filterContainer}>
      <Select
        defaultValue={[roleOptions[0], roleOptions[1]]}
        isMulti
        name="roles"
        options={roleOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Roles "
        onChange={(values) => handleFilterChange("roles", values)}
      />
      <Select
        name="experience"
        options={experienceOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Experience"
        onChange={(values) => handleFilterChange("experience", values)}
      />
      <Select
        name="min-salary"
        options={minSalaryOptions}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Minimum Base Pay Salary"
        onChange={(values) => handleFilterChange("salary", values)}
      />

      <Autocomplete
        disablePortal
        id="company-name"
        options={companyOptions}
        sx={{ width: 300, height: 36, lineHeight: "36px" }}
        onChange={(e, val) => handleFilterChange("company name", val)}
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
