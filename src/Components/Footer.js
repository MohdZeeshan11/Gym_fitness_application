import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/gymLogo1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#e9bef1">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "150px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="35px"
      textAlign="center"
      pb="40px"
      fontStyle="italic"
    >
      No Pain, No Gain
    </Typography>
  </Box>
);

export default Footer;
