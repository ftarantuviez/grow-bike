import BikeCard from "@/components/BikeCard";
import useBikes from "@/hooks/useBikes";
import Grid from "@mui/material/Grid";

const Home = () => {
  const { bikes } = useBikes();
  return (
    <Grid container spacing={3} p={9}>
      {bikes?.map((bike) => (
        <Grid item xs={12} md={6} key={bike.id} mb={3}>
          <BikeCard
            image={bike.image}
            title={bike.title}
            type={bike.type}
            description={bike.description}
            color={bike.color}
            id={bike.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
