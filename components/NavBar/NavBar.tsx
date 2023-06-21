import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "./SearchInput";
import Image from "next/image";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#008037" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Image
              src={"/images/Logo.png"}
              width="80"
              height="80"
              alt="GrowBike Logo"
            />
          </Box>
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
