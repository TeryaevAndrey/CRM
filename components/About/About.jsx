import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Title from "../Title";
import AboutItem from "./AboutItem";

const About = () => {
  return (
    <Box sx={{
      padding: "40px 0"
    }}>
      <Container maxWidth="lg">
        <Title title="CRM" subTitle="идеальна для" />

        <Grid container spacing="16" sx={{
          mt: "24px"
        }}>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
          <Grid item xs={6}>
            <AboutItem img="/about-fight.svg" title="Футбол" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;