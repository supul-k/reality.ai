import React from 'react';
import { Grid, Paper } from '@mui/material';

const ServicesHome = () => {
  return (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={5}>
        <Paper sx={{ height: '100vh' }}>Left Card</Paper>
      </Grid>
      <Grid item xs={2} sx={{ borderLeft: '3px solid #000000', position: 'inherit'}} />
      <Grid item xs={5}>
        <Paper sx={{ height: '100vh' }}>Right Card</Paper>
      </Grid>
    </Grid>
  );
};

export default ServicesHome;

