import React, { useState } from "react";
// import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { CreateCustomer } from "../service/service";

export default function Contact({ org, customers, setCustomers }) {
  const [loading, setLaoding] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      e.target.name?.value &&
      e.target.email?.value &&
      e.target.phone?.value
    ) {
      setLaoding(true);
      const response = await CreateCustomer({
        name: e.target.name?.value,
        email: e.target.email?.value,
        phone: e.target.phone?.value,
      });

      console.log(response);

      if (response?.status) {
        setCustomers([...customers, response?.data]);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
      }
      setLaoding(false);
    }
  };

  return (
    <>
      <Card style={{ maxWidth: 500, margin: "30px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h4">
            {org?.orgName}
          </Typography>
          <Typography gutterBottom variant="h5">
            Add Customer
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  //   value={FormValue.name}
                  placeholder="Enter your name"
                  variant="standard"
                  fullWidth
                  name="name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  variant="standard"
                  name="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="string"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  variant="standard"
                  fullWidth
                  name="phone"
                  required
                />
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "5%" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? "LOADING" : "SUBMIT"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
