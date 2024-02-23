import { Height } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Container,Grid,TextField, Typography } from "@mui/material";
import React from "react";

const Recipes = () => {
  return (
    <Container sx={{my:'2rem'}} maxWidth="sm">
      <TextField  fullWidth id="outlined-basic" label="Enter a password to search recipes and hit enter" variant="outlined" />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardMedia  
            component='img'
             height='200'
            image="https://images.unsplash.com/photo-1698309377471-54a87740d979?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Card>
          <CardContent>
            <Typography variant="hs" >Jollof and Chicken</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recipes;
