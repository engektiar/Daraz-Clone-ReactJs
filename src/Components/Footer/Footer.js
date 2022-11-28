import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import qrcode from "../../Imges/Footerimg/qr.png";
import apple from "../../Imges/Footerimg/apple.png";
import darazf from "../../Imges/Footerimg/daraz.png";
import ali from "../../Imges/Footerimg/ali.png";
const Section = styled.section`
  margin-top: 30px;
  height: 350px;
  background: #2e2e54;
  color: #fff;
  .titles {
    text-transform: capitalize;
  }
  .contact p {
    line-height: 5px;
  }
  .contact p a {
    text-decoration: none;
    color: #fff;
    text-transform: capitalize;
  }
  .footertoplogo {
    display: flex;
  }
  .qrcodeimg {
    height: 130px;
    margin-right: 20px;
  }
  .footerlogo {
    height: 80px;
  }
  .footertext {
    line-height: 5px;
    text-transform: capitalize;
  }
  .happy {
    color: #f57224;
  }
  .footerimages img {
    margin-top: 15px;
    height: 50px;
    margin-right: 20px;
  }
`;
const Footer = () => {
  return (
    <Section>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h3 className="titles">Customer care</h3>
            <div className="contact">
              <p>
                <a href="#">Help Center</a>
              </p>
              <p>
                <a href="#">How to Buy</a>
              </p>
              <p>
                <a href="#">Terms & conditions</a>
              </p>
              <p>
                <a href="#">Help Center</a>
              </p>
            </div>
            <h3 className="titles">Earn with Daraz</h3>
            <div className="contact">
              <p>
                <a href="#">Daraz University</a>
              </p>
              <p>
                <a href="#">Sell on Daraz</a>
              </p>
              <p>
                <a href="#">Code of Conduct</a>
              </p>
              <p>
                <a href="#">Join the Daraz Affillate Program</a>
              </p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <h3 className="titles">Daraz</h3>
            <div className="contact">
              <p>
                <a href="#">about daraz</a>
              </p>
              <p>
                <a href="#">Digital Payments</a>
              </p>
              <p>
                <a href="#">Careers</a>
              </p>
              <p>
                <a href="#">Daraz blog</a>
              </p>
              <p>
                <a href="#">Daraz Cares</a>
              </p>
              <p>
                <a href="#">dMart</a>
              </p>
              <p>
                <a href="#">provacy Policey</a>
              </p>
              <p>
                <a href="#">Daraz app</a>
              </p>
              <p>
                <a href="#">Daraz Exclusives</a>
              </p>
              <p>
                <a href="#">Hungrynaki Food Delivery</a>
              </p>
              <p>
                <a href="#">Bd Cricket live</a>
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="footerlogo">
              <div className="footertoplogo">
                <div>
                  <img className="qrcodeimg" src={qrcode} alt="" />
                </div>
                <div>
                  <img className="footerlogo" src={darazf} alt="" />
                  <p className="footertext happy">Happy shopping</p>
                  <p className="footertext">Download App</p>
                </div>
              </div>
              <div className="footerimages">
                <img src={apple} alt="" />
                <img src={apple} alt="" />
                <img src={ali} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
