import React from "react";
import { Typography } from "@mui/material";

import styled from "styled-components";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Section = styled.section`
  .catatt {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    transition: 0.3s;
  }
  .mart img {
    width: 32px;
    height: 32px;
    margin: 4px;
  }
  .marttext {
    margin-left: 10px;
  }
  .arrowicons {
    margin-left: 130px;
    color: #ff6801;
  }

  .catatt:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
function CatagoeMain(props) {
  return (
    <Section>
      <div className="catagoreTitle">
        <div className="catatt">
          <div className="mart">
            <img src={props.myimg} alt="" />
          </div>

          <Typography className="marttext">{props.cttext}</Typography>
          <div className="arrowicons">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CatagoeMain;
