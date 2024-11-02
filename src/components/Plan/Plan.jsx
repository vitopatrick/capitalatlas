import React from "react";
import { plans } from "./plans";
import { Box, Paper, Typography, Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="mt-1 mb-2">
            <h1 className="text-align fw-bolder">Choose A Plan</h1>
          </div>
        </div>
      </div>
      <Box sx={{ mt: 2 }}>
        <Container>
          <Grid container spacing={3}>
            {plans.map((plan) => (
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2 }}>
                  <Box>
                    <Typography variant="body1" component="h1" gutterBottom>
                      {plan.title}
                    </Typography>
                    <Typography variant="h5" component="h1" gutterBottom>
                      {plan.price}
                    </Typography>
                    <Typography variant="subtitle1" component="h1" gutterBottom>
                      Duration:{plan.Duration}
                    </Typography>
                    {plan.offers.map((offer) => (
                      <Typography
                        variant="subtitle1"
                        component="h1"
                        gutterBottom
                        key={offer}
                      >
                        {offer}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      onClick={() => navigate("/register")}
                      sx={{ textTransform: "capitalize" }}
                    >
                      Start Today !!
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Plan;
