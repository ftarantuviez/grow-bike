import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "./SearchInput";
import Image from "next/image";
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar position="fixed" sx={{ background: "#1d1d1b" }}>
        <Toolbar>
          <Box
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Image
              src={"/images/Logo.png"}
              width="80"
              height="80"
              alt="GrowBike Logo"
            />
            <Typography variant="h5" color="#f2f2f2">
              GrowBike
            </Typography>
          </Box>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
