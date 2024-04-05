import React from "react";
import ImageSlider from "../components/ImageSlider";
import { Grid, Typography } from "@mui/material";
import StoreItem from "../components/StoreItem";
import recipes from "../data/recipes.json";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const slides = [
    {
      id: 1,
      imageUrl: "../imgs/header1.png",
      title: "Slide 1",
      description: "Description for Slide 1",
    },
    {
      id: 2,
      imageUrl: "../imgs/header2.png",
      title: "Slide 2",
      description: "Description for Slide 2",
    },
    {
      id: 3,
      imageUrl: "../imgs/header3.jpg",
      title: "Slide 3",
      description: "Description for Slide 3",
    },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
      <Typography
        variant="subtitle1"
        sx={{
          padding: "50px 10px 20px 10px",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Recipes
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={4}>
            <StoreItem
              id={recipe.id}
              name={recipe.name}
              price={recipe.price}
              imgUrl={recipe.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
