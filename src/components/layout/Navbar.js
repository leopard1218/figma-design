import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", padding: "35px 60px", alignItems: "end" }}>
      <Logo>Lightboard</Logo>
      <Version>beta</Version>
    </Box>
  );
};

export default Navbar;

const Logo = styled.p`
  color: #2400ff;
  font-size: 42px;
  font-weight: 800;
`;

const Version = styled.p`
  color: black;
  font-size: 18px;
  margin-left: 10px;
`;
