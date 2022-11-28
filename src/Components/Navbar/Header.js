import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../Imges/DarazLogo/daraz.png";
import logo2 from "../../Imges/DarazLogo/logo2.png";
import AutoComp from "./Autocom";
import SearchIcon from "@mui/icons-material/Search";
const Section = styled.section`
  background: #ffffff;
  margin-top: 20px;
  height: 60px;
  .header {
    position: static;
  }
  .logo {
    margin-left: 40px;
    margin-top: -10px;
  }
  .shoppingCard {
    margin-top: -15px;
  }

  .logoimg {
    height: 45px;
  }
  .logotext {
    text-transform: uppercase;
    color: red;
    font-size: 30px;
    font-weight: bolder;
  }
  .headerRight {
    display: flex;
    align-items: center;
  }
  .shoppingCard {
    margin-right: 40px;
    font-size: 30px;
  }
  .search {
    display: flex;
    margin-top: -12px;
  }
  .autocom {
    width: 92%;
  }
  .searchbtn {
    width: 60px;
    height: 48px;
    outline: none;
    border-radius: 0px 5px 5px 0px;
    border: none;
    background: #f57224;
    margin-top: 2px;
  }
`;
const Header = () => {
  return (
    <div>
      <Section>
        <div className="header">
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <div className="logo icon">
                {/* <img src={logo} alt="" className="logoimg" /> */}
                ekDaraz
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className="search">
                <div className="autocom">
                  <AutoComp />
                </div>
                <div>
                  <button className="searchbtn">Search</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={3}>
              <div className="headerRight">
                <div className="shoppingCard">
                  <ShoppingCartIcon />
                </div>
                <div className="logo">
                  <img src={logo2} alt="" className="logoimg" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Section>
    </div>
  );
};

export default Header;
