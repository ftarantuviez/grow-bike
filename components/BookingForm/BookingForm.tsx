import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";

type Props = {};

const BookingForm = (props: Props) => {
  return (
    <form style={{ width: "100%" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth id="name" label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="phone"
            label="Phone number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="email"
            label="Repeat your email"
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker sx={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker sx={{ width: "100%" }} disabled />
        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;
