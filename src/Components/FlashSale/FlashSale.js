import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Section = styled.section`
  .flashselltotal {
    border-bottom: 1px solid gray;
  }
  .flashTitle {
    font-size: 22px;
    color: #8a7575;
  }
  .endingTime {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 10px 20px;
  }
  .datein {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .onsale {
    color: orange;
    font-size: 18px;
    margin-right: 30px;
  }
  .datebutton {
    height: 30px;
    width: 40px;
    background: orange;
    margin: 10px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
  }
  .shopmore {
    margin-left: 500px;
    color: #f88824;
    border: 1px solid #f88824;
  }
`;

function FlashSale(props) {
  return (
    <Section>
      <Container>
        <div className="flashselltotal">
          <Typography className="flashTitle">FlashSale</Typography>
          <div className="endingTime">
            <p className="onsale">On Sale Now</p>
            <span>Ending in</span>
            <div className="datein">
              <p className="datebutton">01</p>
              <p className="datebutton">02</p>
              <p className="datebutton">01</p>
            </div>

            <Button className="shopmore" variant="outlined" size="large">
              Shop more
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FlashSale;
