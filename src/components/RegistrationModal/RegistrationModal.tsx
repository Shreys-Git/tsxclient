import React, { useState } from "react";
import { Button, Modal, TextField, Typography } from "@mui/material";

const RegistrationModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Registration Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RegistrationModal;
