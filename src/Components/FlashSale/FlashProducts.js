import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductFlashsele from "./ProductFlashsele";
const Section = styled.section`
  .flashsel {
    background: #fff;
    margin-top: 10px;
    padding: 15px;
  }
`;
const FlashProducts = () => {
  return (
    <Section>
      <Container>
        <div className="flashsel">
          <Link to="/product:id">
            <ProductFlashsele />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default FlashProducts;
