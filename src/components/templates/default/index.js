import React from "react";
import Footer from "../../molecules/footer";
import Header from "../../organisms/header";
import Container from "../container";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
