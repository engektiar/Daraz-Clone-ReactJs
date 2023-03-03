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
  height: 400px;
  background: #2e2e54;
  color: #fff;

  .titles {
    text-transform: capitalize;
    margin-top: 50px;
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
  .footerright {
    margin-top: 90px;
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
                <a href="https://helpcenter.daraz.com.bd/page/home?pageId=1&language=en">Help Center</a>
              </p>
              <p>
                <a href="https://helpcenter.daraz.com.bd/page/knowledge?pageId=11&category=1000001032&knowledge=1000005321&language=en">How to Buy</a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/wow/i/bd/help-pages/terms-and-conditions/?spm=a2a0e.home.footer_top.5.14fe12f7ljNAVe&scm=1003.4.icms-zebra-100022982-6850452.OTHER_6502233778_7696023">
                  Terms & conditions
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/contact-us/?spm=a2a0e.home.footer_top.4.14fe12f7jPyOuP&scm=1003.4.icms-zebra-100022982-6850452.OTHER_6502233777_7696023">
                  Contact Us
                </a>
              </p>
            </div>
            <h3 className="titles">Earn with Daraz</h3>
            <div className="contact">
              <p>
                <a href="https://university.daraz.com.bd/?spm=a2a0e.home.footer_top.7.530112f7hl9e8B&scm=1003.4.icms-zebra-100022982-2888459.OTHER_5476361449_2538025">
                  Daraz University
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/sell-on-daraz/?spm=a2a0e.home.footer_top.8.4c2e12f7pdtCyH&scm=1003.4.icms-zebra-100022982-2888459.OTHER_5476361450_2538025">
                  Sell on Daraz
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/wow/i/bd/help-pages/code-of-conduct?spm=a2a0e.27105766.footer_top.9.64c56f079puc0Q&hybrid=1&scm=1003.4.icms-zebra-100022982-2888459.OTHER_5476361451_2538025">
                  Code of Conduct
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/daraz-affiliate-program/?spm=a2a0e.home.footer_top.10.4c2e12f7uG1Gxi&scm=1003.4.icms-zebra-100022982-2888459.OTHER_6035955355_2538025">
                  Join the Daraz Affillate Program
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={3}>
            <h3 className="titles">Daraz</h3>
            <div className="contact">
              <p>
                <a href="https://www.daraz.com.bd/about-us/?spm=a2a0e.home.footer_top.11.4c2e12f76eTuKl&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348799_2538033">
                  about daraz
                </a>
              </p>
              <p>
                <a href="https://pages.daraz.com.bd/wow/gcp/daraz/channel/bd/pay/daraz-pay?spm=a2a0e.home.footer_top.12.4c2e12f7Ky7Hgc&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348800_2538033">
                  Digital Payments
                </a>
              </p>
              <p>
                <a href="https://blog.daraz.com.bd/?spm=a2a0e.home.footer_top.13.4c2e12f7V4Bjlx&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348802_2538033"> Daraz Blog</a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/wow/i/bd/help-pages/privacy-policy?spm=a2a0e.home.footer_top.16.4c2e12f7He6iOI&hybrid=1&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348805_2538033">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/mobile-apps/?spm=a2a0e.home.footer_top.17.4c2e12f72SKDUm&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348806_2538033">
                  Daraz App
                </a>
              </p>
              <p>
                <a href="https://pages.daraz.com.bd/wow/gcp/daraz/channel/bd/dmart/dmart-home?spm=a2a0e.home.footer_top.15.4c2e12f7yVEOd9&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348804_2538033">
                  dMart
                </a>
              </p>

              <p>
                <a href="https://www.daraz.com.bd/daraz-exclusive-products/?spm=a2a0e.home.footer_top.18.4c2e12f7OsBAKs&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348807_2538033">
                  Daraz Exclusives
                </a>
              </p>
              <p>
                <a href="https://hungrynaki.com/?spm=a2a0e.home.footer_top.19.4c2e12f7oXWX8h&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6051348808_2538033">
                  Hungrynaki Food Delivery
                </a>
              </p>
              <p>
                <a href="https://www.daraz.com.bd/cricket-live-streaming/?spm=a2a0e.home.footer_top.21.4c2e12f7TvOWKX&scm=1003.4.icms-zebra-100022982-2888463.OTHER_6502124219_2538033">
                  Bd Cricket live
                </a>
              </p>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="footerright">
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
