import styled from "@emotion/styled";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import CategorisItems from "./CategorisItems.js";
const Section = styled.section`
  .catagoer {
    background: #fff;
    padding: 15px;
  }
  .cataTitle {
    color: #486ca4;
    font-size: 20px;
    margin-bottom: -5px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;
const CategoriMain = () => {
  return (
    <Section>
      <Container>
        <h4 className="cataTitle">Categories</h4>
        <div className="catagoer">
          <Link to="/catagoryDetails">
            <CategorisItems />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default CategoriMain;
