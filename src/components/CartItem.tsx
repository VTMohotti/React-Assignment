import { Stack, Box, Typography, Button } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import recipes from "../data/recipes.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const allItems = [...storeItems, ...recipes];
  const item = allItems.find((i) => i.id === id);

  if (!item) return null;

  return (
    <Stack direction="row" gap={2} alignItems="center">
      {item.imgUrl && (
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "contain" }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <Typography variant="body1">
            {item.name}
            {""}
          </Typography>
          {quantity > 1 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "1rem" }}
            >
              x{quantity}
            </Typography>
          )}
        </div>
      </Box>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography>{formatCurrency(item.price * quantity)}</Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
}
