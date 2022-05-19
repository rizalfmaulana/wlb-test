import React from "react";
import { useParams } from "react-router-dom";
import FormBlog from "../../components/organisms/formBlog";
import Container from "../../components/templates/container";
import Layout from "../../components/templates/default";

const NewBlog = () => {
  const { id } = useParams();
  return (
    <Layout>
      <Container>
        <FormBlog id={id} />
      </Container>
    </Layout>
  );
};

export default NewBlog;
