import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";



const Footer = () => {

  return (
    <Container>
      <p></p>
      <Grid container spacing={2}>
        {/* <Grid item xs={12} md={8} alignSelf="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea quasi
          magnam rem velit cumque facilis minus iste, similique at placeat
          adipisci reiciendis! Quibusdam pariatur voluptatibus suscipit,
          laboriosam earum sint asperiores, est velit voluptatem aspernatur
          quisquam modi quas, eligendi ad hic! Laborum deserunt quis, atque
          quam, sapiente maxime repellat voluptatem deleniti obcaecati aperiam
          ipsum! Iure, saepe! Voluptatibus harum, animi sapiente quas dolore,
          cum nam adipisci officiis inventore aperiam omnis aut fuga nemo
          perferendis tenetur? Debitis nihil facere quos? Debitis molestias quae
          voluptatum. Eius perferendis necessitatibus sed consequatur possimus
          ipsam odio, eos ab, enim corporis explicabo aspernatur consequuntur
          saepe quo facilis et voluptatem qui, ut quae! Reiciendis similique
          exercitationem ipsa. Aliquam quam eum ad, non delectus ducimus soluta
          numquam, molestiae fugiat sit odit! Repudiandae quaerat deserunt totam
          praesentium eaque voluptatem pariatur neque porro, accusantium
          consequuntur, exercitationem quisquam? Itaque praesentium beatae
          consectetur, quisquam facilis qui laboriosam voluptate maxime
          cupiditate voluptas et nisi?
        </Grid> */}
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
