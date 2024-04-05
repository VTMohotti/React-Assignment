import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import recipes from "../data/recipes.json";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  const getItemDetails = (id: number) => {
    return (
      recipes.find((recipe) => recipe.id === id) ||
      storeItems.find((item) => item.id === id)
    );
  };

  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = getItemDetails(cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeCart}>
      <div style={{ width: 400, padding: "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Cart</Typography>
          <IconButton onClick={closeCart}>
            <CloseIcon />
          </IconButton>
        </div>
        <div style={{ width: "100%", paddingRight: "16px" }}>
          <Stack spacing={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Typography
              variant="h6"
              component="div"
              sx={{
                marginLeft: "auto",
                fontWeight: "bold",
                fontSize: "1.25rem",
                textAlign: "right",
              }}
            >
              Total {formatCurrency(totalAmount)}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                endIcon={<ShoppingCartCheckoutIcon />}
              >
                Checkout
              </Button>
            </Box>
          </Stack>
        </div>
      </div>
    </Drawer>
  );
}
