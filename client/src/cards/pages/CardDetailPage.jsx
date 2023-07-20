import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import { StaticGoogleMap, Marker } from "react-static-google-map";


const CardDetailPage = () => {
  const { id } = useParams();
  const { value: { card }, handleGetCard } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find more details about the business"
      ></PageHeader>
      <div>Details of card: {id}</div>

      {card && <h1>{card.title}</h1>}

      <p>
        More details...
      </p>

      <img src={'https://maps.googleapis.com/maps/api/staticmap?center=ashkelon,CA&zoom=14&size=400x400&key=AIzaSyCP1y_kwKFUy_jBDb-4EvUjt7b5jCYftfc'} />
      <StaticGoogleMap
        size="600x600"
        apiKey="AIzaSyCwxnuanit6uxY5sCnk_Fwl2pJnjcX-270"
      >
        <Marker
          location="-12.4742178 -49.1217118"
          color="blue"
          label="P"
          size="tiny"
          iconURL="https://gasdeverao.cocacola.com.br/assets/favicons/favicon-32x32.png"
        />
      </StaticGoogleMap>
    </Container>
  );
};

export default CardDetailPage;
