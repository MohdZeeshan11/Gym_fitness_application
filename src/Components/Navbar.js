import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/images/Logo.png";
import Logo from "../assets/images/gymLogo1.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "5px" },
        mt: { sm: "20px", xs: "14px" },
        justifyContent: "none",
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "120px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="30px"
        fontSize="24px"
        alignItems="center"
        style={{ textAlign: "center" }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #9c27b0",
          }}
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#3A1212" }}
          onClick={() => {
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
          }}
        >
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Exercises
          </a>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
