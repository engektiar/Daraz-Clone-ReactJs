import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";

const Section = styled.section`
  margin-top: -15px;
  background: #ececec;
  height: 25px;

  .header {
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .header li {
    list-style: none;
    padding: 0px 10px;
  }
  .header li a {
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: #212121;
    font-weight: 500;
  }

  .header li a:hover {
    color: #f57224;
  }
`;

function TopHeader(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Section>
            <div className="topheder">
              <ul className="header">
                <li>
                  <a href="#">SAVE MORE NO APP</a>
                </li>
                <li>
                  <a href="#">sell on daraz</a>
                </li>
                <li>
                  <a href="#">Customer care</a>
                </li>
                <li>
                  <a href="#">track my order</a>
                </li>
                <li>
                  <a href="#">signup/login</a>
                </li>
                <li>
                  <a href="#">Daraz affiliate Program</a>
                </li>
                <li>
                  <a href="#">Language</a>
                </li>
              </ul>
            </div>
          </Section>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopHeader;
