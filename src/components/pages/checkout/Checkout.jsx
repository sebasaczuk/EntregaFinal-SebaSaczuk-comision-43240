import React from "react";
import { Button, TextField, Typography } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" type="submit" color="primary">
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
