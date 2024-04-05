import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import StoreItem from "./StoreItem";
import recipesData from "../data/recipes.json"; // Import JSON data

type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ProductRow: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    setProducts(recipesData);
  }, []);

  const nextItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box position="relative" width="100%">
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid key={product.id} item xs={3}>
            <StoreItem
              id={product.id}
              name={product.name}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Paper
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          width: "fit-content",
        }}
      >
        <Button variant="outlined" onClick={prevItem}>
          Prev
        </Button>
        <StoreItem
          id={products[currentItemIndex]?.id}
          name={products[currentItemIndex]?.name}
          price={products[currentItemIndex]?.price}
          imgUrl={products[currentItemIndex]?.imgUrl}
        />
        <Button variant="outlined" onClick={nextItem}>
          Next
        </Button>
      </Paper>
    </Box>
  );
};

export default ProductRow;
