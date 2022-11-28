import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Data from "../../Data/product.json";

const Section = styled.section`
  .card {
    height: 330px;
    margin-bottom: 15px;
  }
  .card:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .flimage {
    height: 180px;
    width: 100%;
  }
  .flCardInfo {
    margin-top: 8px;
    padding: 0px 7px;
  }
  .cardtitle {
    height: 60px;
  }
  .flTitleText {
    font-size: 13px;
    font-weight: 400px;
    text-transform: capitalize;
  }
  .flprice {
    margin-top: -20px;
  }

  .price {
    color: #f85606;
    font-size: 20px;
  }
  .price span {
    font-size: 30px;
  }
  .decout {
    margin-top: -25px;
    color: #9e9e9e;
  }
  .decout span {
    font-size: 25px;
  }
  .lodemore {
    display: flex;
    align-items: center;

    justify-content: center;
    margin: 20px 0px;
  }
  .lodebutton {
    height: 50px;
    width: 250px;
    font-size: 16px;
    text-transform: uppercase;
    border: 1px solid red;
    cursor: pointer;
    color: #f77a58;
  }
`;

function Product() {
  const [vasibal, setvasibal] = useState(12);

  const ShowMoreItem = () => {
    setvasibal((prevlue) => prevlue + 12);
  };
  return (
    <Section>
      <Grid container spacing={2}>
        {Data.slice(0, vasibal).map((item) => (
          <Grid item md={2}>
            <Card sx={{ maxWidth: 320 }} className="card">
              <CardMedia className="flimage" component="img" image={item.img} alt="green iguana" />

              <div className="flCardInfo">
                <div className="cardtitle">
                  <p className="flTitleText"> {item.name}</p>
                </div>
                <div className="flprice">
                  <p className="price">
                    <span>৳</span>
                    {item.price}
                  </p>
                  <p className="decout">
                    <span>৳</span>
                    <del>200</del>-58%
                  </p>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="lodemore">
        <button className="lodebutton" onClick={ShowMoreItem}>
          lode more
        </button>
      </div>
    </Section>
  );
}

export default Product;
