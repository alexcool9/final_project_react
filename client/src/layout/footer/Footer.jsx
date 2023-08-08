import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";



const Footer = () => {

  return (
    <Container>
      <p></p>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <h3>Cards</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <h3>Nav options</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <h3>About</h3>
        </Grid>
      </Grid>
      <p></p>
    </Container>
  );
};

export default Footer;
