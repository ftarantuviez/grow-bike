import { Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { BookingFormProps } from "./types";

const BookingForm = (props: BookingFormProps) => {
  const {
    form,
    onChange,
    handleDateChange,
    priceCalculated,
    amountOfDaysRented,
    onSubmit,
  } = props;

  return (
    <form style={{ width: "100%" }} onSubmit={onSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            variant="outlined"
            value={form.name}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="phone"
            label="Phone number"
            variant="outlined"
            value={form.phone}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="repeatEmail"
            label="Repeat your email"
            variant="outlined"
            type="email"
            value={form.repeatEmail}
            onChange={onChange}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            sx={{ width: "100%" }}
            value={form.initialDate}
            onChange={handleDateChange("initial")}
            label={"Initial Date"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            sx={{ width: "100%" }}
            value={form.finalDate}
            onChange={handleDateChange("final")}
            label={"Final Date"}
            disabled={!form.initialDate}
            minDate={form.initialDate ?? ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          {!isNaN(amountOfDaysRented) && (
            <Typography variant="body1">
              You can rent this bike for {amountOfDaysRented} days at{" "}
              <span style={{ color: "#00a650" }}>{priceCalculated} USD</span>
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end">
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            disabled={!form.finalDate || !form.initialDate}
          >
            Rent bike
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default BookingForm;
