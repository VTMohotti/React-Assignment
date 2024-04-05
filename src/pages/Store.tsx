import storeItems from "../data/items.json";
import Grid from "@mui/material/Grid";
import StoreItem from "../components/StoreItem";
import Footer from "../components/Footer";

function Store() {
  return (
    <>
      <h1>Store</h1>
      <Grid container spacing={3}>
        {storeItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <StoreItem {...item} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default Store;
