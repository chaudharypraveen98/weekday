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

const JobListings = () => {
  const jobData = [
    {
      company: "narrative (yc w23)",
      role: "Founding Fullstack Engineer",
      location: "India",
      salary: "₹15 - 40 LPA",
      description:
        "About us Narrative is making AI powered data tools for logistics. We standardize and find errors in shipping invoice data for large companies.",
      experience: "3 years",
      daysAgo: 13,
    },
    {
      company: "Business on Bot",
      role: "Fullstack Engineer",
      location: "Bangalore",
      salary: "₹15 - 20 LPA",
      description:
        "About us We are on a mission to help 30 million+ D2C brands and SMBs with automated sales and user acquisition on WhatsApp in India. In the first half of 2021, Businessonbot has grown 145% M-o-M in MRR and targets a massive wave of D2C businesses in India. This year, we'd like to become the 1st and largest WhatsApp SaaS player of its kind in India. There's never been a more exciting time to be in Businessonbot.",
      experience: "1 year",
      daysAgo: 8,
    },
    {
      company: "CertifyOS",
      role: "FullStack Engineer",
      location: "India",
      salary: "₹40 - 60 LPA",
      description:
        "About us CertifyOS is a first-of-its-kind provider intelligence platform, powered by API integrations and hundreds of verified data points. We unlock insights and power performance for clinicians, teams and organizations, with frictionless licensing and enrollment, one-click credentialing and real-time network monitoring at your fingertips",
      experience: "2 years",
      daysAgo: 22,
      match: 67,
    },
  ];

  return (
    <Box>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        {jobData.map((job, index) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            key={index}
            className="card-body-grid-parent"
          >
            <Card style={{ marginBottom: 16 }} className="card-body">
              <div className="date-match-container">
                <div className="date-container">
                  <Typography variant="body2" color="black" className="date">
                    Posted ⏳ {job.daysAgo} days ago
                  </Typography>
                </div>
                {job.match && (
                  <CircularProgressWithLabel
                    value={job.match}
                    variant="determinate"
                    style={{
                      color: "rgb(85, 239, 196)",
                      width: "50px",
                      height: "50px",
                      transform: "rotate(-90deg)",
                    }}
                  />
                )}
              </div>
              <CardContent>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src="https://concrete.store/Content/images/favicon.png"
                    alt="logo"
                    width={25}
                    height={40}
                  />
                  <div className="info-container">
                    <h3>{job.company}</h3>
                    <h2>{job.role}</h2>
                    <p className="cards-sub-text">{job.location}</p>
                  </div>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  Estimated Salary: {job.salary}
                </Typography>
                <div className="description-container">
                  <Typography variant="body2">{job.description}</Typography>
                </div>

                <Typography variant="body2">
                  Minimum Experience: {job.experience}
                </Typography>

                <Button variant="contained" color="primary">
                  Easy Apply
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
