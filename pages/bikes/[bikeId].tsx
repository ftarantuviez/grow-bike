/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Box from "@mui/material/Box";
import { GetServerSideProps } from "next";
import { GetBikeResponse } from "../api/get-bike";
import { Alert, Divider, Snackbar, Typography } from "@mui/material";
import { dataByType } from "@/components/BikeCard/BikeCard";
import BookingForm from "@/components/BookingForm/BookingForm";
import useBikes from "@/hooks/useBikes";
import usePriceCalculator from "@/hooks/usePriceCalculator";
import ConfirmationDialog from "@/components/ConfirmationDialog/ConfirmationDialog";

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  repeatEmail: string;
  initialDate: string | null;
  finalDate: string | null;
};
const BikeDetails = (props: GetBikeResponse) => {
  const { bike } = props;
  const { bikePrices } = useBikes();

  const [form, setForm] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    repeatEmail: "",
    initialDate: null,
    finalDate: null,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackbar, setIsSnackbar] = useState(false);

  const handleDateChange = (val: string) => (e: string | null) => {
    if (val === "initial") {
      setForm({ ...form, initialDate: e });
    } else setForm({ ...form, finalDate: e });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleDialogOpen();
  };

  const onSaveRent = () => {
    localStorage.setItem("reservation", JSON.stringify(form));
    handleDialogOpen();
    handleSnackbar();
    setForm({
      name: "",
      phone: "",
      email: "",
      repeatEmail: "",
      initialDate: null,
      finalDate: null,
    });
  };

  const handleDialogOpen = () => setIsDialogOpen(!isDialogOpen);
  const handleSnackbar = () => setIsSnackbar(!isSnackbar);

  if (!bike) {
    return <h1>Not bike found!</h1>;
  }

  const { price: priceCalculated, amountOfDaysRented } = usePriceCalculator(
    new Date(form.initialDate ?? ""),
    new Date(form.finalDate ?? ""),
    bike.type,
    bikePrices
  );

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
          <BookingForm
            form={form}
            onChange={onChange}
            handleDateChange={handleDateChange}
            priceCalculated={priceCalculated}
            amountOfDaysRented={amountOfDaysRented}
            onSubmit={onSubmit}
          />
        </Box>
      </Box>
      <ConfirmationDialog
        title="Rent your bike now!"
        description={
          <Typography variant="body1">
            You can rent this bike for {amountOfDaysRented} days at{" "}
            <span style={{ color: "#00a650" }}>{priceCalculated} USD</span>
          </Typography>
        }
        onClose={handleDialogOpen}
        onSubmit={onSaveRent}
        open={isDialogOpen}
      />
      <Snackbar
        open={isSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbar}
      >
        <Alert
          onClose={handleSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your reservation was submitted successfully!
        </Alert>
      </Snackbar>
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
