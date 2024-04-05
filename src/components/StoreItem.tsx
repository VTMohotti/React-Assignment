import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { formatCurrency } from "../utilities/formatCurrency";
import { Box } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1.25rem", fontWeight: 500 }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", marginLeft: "0.5rem" }}
          >
            {formatCurrency(price)}
          </Typography>
        </Typography>
        <div style={{ marginTop: "auto" }}>
          {quantity === 0 ? (
            <Button
              variant="contained"
              fullWidth
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </Button>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".5rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography variant="h6" component="span">
                    {" "}
                    {quantity}{" "}
                  </Typography>
                  <Typography variant="body1" component="span">
                    {" "}
                    in cart{" "}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </Box>
              <Button
                onClick={() => removeFromCart(id)}
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#f44336",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                  },
                }}
              >
                Remove
              </Button>
            </Box>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default StoreItem;
