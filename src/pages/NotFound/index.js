import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/templates/container";
import Layout from "../../components/templates/default";

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <div className="text-center ">
          <h2 className="font-bold text-9xl">404</h2>
          <h3 className="text-xl mb-6">Woops, looks like this page doesn't exist</h3>
          <Link className="text-blue-600" to="/">
            {"<-"} Back to Home
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
