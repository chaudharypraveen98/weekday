import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import "../styles/dashboard.css";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

import * as data from "../data/jobList.json";
function getRandomValue() {
  return Math.floor(Math.random() * 101);
}

const JobListings = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        {data["jdList"].map((job, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={index}
            className="card-body-grid-parent"
          >
            <Card
              style={{
                marginBottom: 16,
              }}
              className="card-body"
            >
              <div className="date-match-container">
                <div className="date-container">
                  <Typography variant="body2" color="black" className="date">
                    Posted ⏳ 2{job.daysAgo} days ago
                  </Typography>
                </div>

                <CircularProgressWithLabel
                  value={getRandomValue()}
                  variant="determinate"
                  style={{
                    color: "rgb(85, 239, 196)",
                    width: "50px",
                    height: "50px",
                    transform: "rotate(-90deg)",
                  }}
                />
              </div>
              <CardContent
                sx={{ justifyContent: "flex-start", textAlign: "left" }}
              >
                <Box
                  component={"div"}
                  gap={"0.5rem"}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <img src={job.logoUrl} alt="logo" width={25} height={40} />
                  <div className="info-container">
                    <h3>{job.companyName}</h3>
                    <h2>{job.jobRole}</h2>
                    <p className="cards-sub-text">{job.location}</p>
                  </div>
                </Box>
                <Typography variant="body2" className="card-salary">
                  Estimated Salary: {job.minJdSalary}-{job.maxJdSalary} ✅
                </Typography>
                <div className="description-container">
                  <Typography variant="body2">
                    {job.jobDetailsFromCompany}
                  </Typography>
                </div>
                <div className="view-more">
                  <a href={job.jdLink}>View Job</a>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <Typography
                    variant="body2"
                    className="info-container poc-info-container"
                  >
                    <h3>Minimum Experience:</h3>
                  </Typography>
                  <Typography variant="body2">
                    {job.minExp ? job.minExp : "1"} years
                  </Typography>
                </div>

                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "rgb(85, 239, 196)",
                    color: "rgb(0, 0, 0)",
                    fontWeight: "500",
                    padding: "8px 18px",
                  }}
                >
                  ⚡ Easy Apply
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListings;
