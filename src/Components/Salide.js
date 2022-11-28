import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";

import banner1 from "../Imges/DarazLogo/banner1.jpg";
import banner2 from "../Imges/DarazLogo/banner2.jpg";
import banner3 from "../Imges/DarazLogo/banner3.jpg";
import banner4 from "../Imges/DarazLogo/banner4.jpg";
import banner5 from "../Imges/DarazLogo/banner5.jpg";
import banner6 from "../Imges/DarazLogo/banner6.jpg";
import styled from "styled-components";
const Section = styled.section`
  margin-top: 12px;

  .bangerimg {
    height: 350px;
    width: 100%;
  }
  .slick-dots {
    bottom: 18px;
    color: #fff;
  }

  .slick-dots li {
    background: #fff;
    border-radius: 10px;
    height: 14px;
    width: 20px;
  }
`;
export default class Salider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Section>
              <Slider {...settings} className="dotedicon">
                <div>
                  <img src={banner1} alt="" className="bangerimg" />
                </div>
                <div>
                  <img src={banner2} alt="" className="bangerimg" />
                </div>
                <div>
                  <img src={banner3} alt="" className="bangerimg" />
                </div>
                <div>
                  <img src={banner4} alt="" className="bangerimg" />
                </div>
                <div>
                  <img src={banner5} alt="" className="bangerimg" />
                </div>
                <div>
                  <img src={banner6} alt="" className="bangerimg" />
                </div>
              </Slider>
            </Section>
          </Grid>
        </Grid>
      </div>
    );
  }
}
