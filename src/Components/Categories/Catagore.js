import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import mart from "../../Imges/Cat/mart.gif";
import fashion from "../../Imges/Cat/fashion.gif";
import beaut from "../../Imges/Cat/beaut.gif";
import home from "../../Imges/Cat/home.gif";

import CatagoeMain from "./CatagoeMain";
const Section = styled.section`
  background: #f5f5f5;
  margin-bottom: 20px;
  .catagoreTitle {
    margin-top: 15px;
  }
`;
function Catagore(props) {
  return (
    <Section>
      <Container>
        <div className="catagoreTitle">
          <Grid container spacing={2}>
            <Grid item md={3}>
              <div>
                <CatagoeMain myimg={mart} cttext="Mart" />
              </div>
            </Grid>
            <Grid item md={3}>
              <CatagoeMain myimg={fashion} cttext="Fashon" />
            </Grid>
            <Grid item md={3}>
              <CatagoeMain myimg={beaut} cttext="Butiye" />
            </Grid>
            <Grid item md={3}>
              <CatagoeMain myimg={home} cttext="Home" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export default Catagore;
