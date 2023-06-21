import BikeCard from "@/components/BikeCard";
import { Grid } from "@mui/material";

type HomeProps = {};

const Home = (props: HomeProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <BikeCard
          image={
            "https://www.reidbikes.com/wp-content/uploads/2022/10/Ladies-Classic-eBike-3-900x588.png"
          }
          title="BICICLETA EXER C 211"
          type={"electric"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quaerat voluptate molestiae."
          price={10}
          color="red"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <BikeCard
          image={
            "https://www.reidbikes.com/wp-content/uploads/2022/10/Ladies-Classic-eBike-3-900x588.png"
          }
          title="BICICLETA EXER C 211"
          type={"electric"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quaerat voluptate molestiae."
          price={10}
          color="red"
        />
      </Grid>
    </Grid>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      hola: "hola",
    },
  };
};

export default Home;
