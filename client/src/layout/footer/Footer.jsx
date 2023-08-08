import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import NavItem from "../../routes/NavItem";

const Footer = () => {

  const { user } = useUser();

  return (
    <Container>
      <p></p>
      <Grid container spacing={2}>
        {/* <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <h3>Cards</h3>
        </Grid> */}
        {user?.isBusiness && (
          <>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
            >

              <NavItem to={ROUTES.MY_CARDS} label="My Cards" color="black" />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
            >
              <NavItem to={ROUTES.FAV_CARDS} label="Fav Cards" color="black" />
            </Grid>
          </>
        )}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <NavItem to={ROUTES.ABOUT} label="About" color="black" />

        </Grid>
      </Grid>
      <p></p>
    </Container>
  );
};

export default Footer;
