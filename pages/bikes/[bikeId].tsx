import React from "react";
import axios from "axios";
import Image from "next/image";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";
import { GetBikeResponse } from "../api/get-bike";
import { Divider, Typography } from "@mui/material";
import { dataByType } from "@/components/BikeCard/BikeCard";
import BookingForm from "@/components/BookingForm/BookingForm";

const BikeDetails = (props: GetBikeResponse) => {
  const { bike } = props;

  if (!bike) {
    return;
  }

  const { icon, iconName } = dataByType[bike.type];
  return (
    <Box position="relative" pb={5}>
      <Box bgcolor={bike.color} height="40%" width="100%" position="absolute" />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        position="relative"
        pt={10}
      >
        <Image src={bike.image} width="650" height="650" alt={bike.title} />
        <Typography variant="h5" mb={1}>
          {bike.title}
        </Typography>
        <Box display="flex" alignItems="center" mb={4}>
          {icon}
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize="medium"
            ml={0.5}
          >
            {iconName}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          lineHeight="35px"
          maxWidth="700px"
          fontSize="large"
        >
          {bike.description}
        </Typography>
        <Divider style={{ width: "80%", margin: "20px 0" }} />
        <Typography variant="h5" mb={4}>
          Book it and start riding
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          width={{ xs: "90%", md: "60%" }}
        >
          <BookingForm />
        </Box>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<GetBikeResponse> = async (
  context
) => {
  const { bikeId } = context.query;

  const { data } = await axios.get(
    `http://localhost:3000/api/get-bike?bikeId=${bikeId}`
  );

  return {
    props: {
      ...data,
    },
  };
};

export default BikeDetails;
