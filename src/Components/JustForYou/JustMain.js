import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import Product from "./Product";
const Section = styled.section`
  .product {
    background: #fff;
  }
  .justtitle {
    color: #486ca4;
    font-size: 20px;
    margin-bottom: -5px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;
const JustMain = () => {
  return (
    <Section>
      <Container>
        <h4 className="justtitle">Just For You </h4>
        <div className="product">
          <Product />
        </div>
      </Container>
    </Section>
  );
};

export default JustMain;
