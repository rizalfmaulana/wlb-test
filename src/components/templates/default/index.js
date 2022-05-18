import React from "react";
import Header from "../../organisms/header";
import Container from "../container";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
