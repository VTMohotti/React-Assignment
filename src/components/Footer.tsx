import React from "react";
import { Typography, Grid, IconButton, styled } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterContainer = styled("footer")({
  backgroundColor: "#FFE600",
  color: "inherit",
  padding: "2rem",
  marginTop: "60px",
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="body1">Email: info@lays.com</Typography>
          <Typography variant="body1">Phone: 0118327100</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Want More?</Typography>
          <Typography variant="body1">
            Connect with us on social media!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Follow Us</Typography>
          <IconButton aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" color="textSecondary">
        © 2024 Lay's, Inc. Sri Lanka
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
