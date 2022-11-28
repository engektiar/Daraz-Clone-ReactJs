import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Data from "../../Data/product.json";
const ProductCat = styled.div`
  .product {
    height: 190px;
    margin-bottom: 25px;
  }
  .ctimg {
    height: 130px;
  }
  .nametext {
    margin-top: -5px;
    font-size: 11px;
    text-transform: capitalize;
  }
`;
const CategorisItems = (props) => {
  return (
    <ProductCat>
      <div>
        <Grid container spacing={2}>
          {Data.slice(0, 16).map((item) => (
            <Grid item md={1.5}>
              <Card sx={{ maxWidth: 345 }} className="product">
                <CardActionArea>
                  <CardMedia component="img" className="ctimg" image={item.img} alt="green iguana" />
                  <CardContent>
                    <p className="nametext"> {item.name}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ProductCat>
  );
};

export default CategorisItems;
