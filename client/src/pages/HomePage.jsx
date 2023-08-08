import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Card from "../cards/components/card/Card";

const HomePage = () => {

  const cards = [
    {
      _id: "1",
      title: 'דן בדרום',
      subtitle: 'הנוסע ראשון, הנהג אחרון',
      user_id: '1'
    },
    {
      _id: "2",
      title: 'אגד',
      subtitle: 'נחשוב עליך בדרך',
      user_id: '1'
    },
    {
      _id: "3",
      title: 'אפיקים',
      subtitle: 'עובדים ללא הפסקה',
      user_id: '1'
    },
  ];


  return (
    <Container>
      <PageHeader
        title="האוטובוסים של אלכס"
        subtitle="הנסיעה שלכם בידיים בטוחות"
      />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <Card
            key={1}
            card={cards[0]}
            onDelete={() => { }}
            onLike={() => { }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <Card
            key={1}
            card={cards[1]}
            onDelete={() => { }}
            onLike={() => { }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <Card
            key={1}
            card={cards[2]}
            onDelete={() => { }}
            onLike={() => { }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
