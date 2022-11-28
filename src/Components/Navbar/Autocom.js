import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import styled from "styled-components";
import Data from "../../Data/product.json";
const Section = styled.section`
  margin-top: -10px;
  display: flex;
  align-items: center;

  .MuiOutlinedInput-root {
    width: 607px;
    background: #f5f5f5;
    height: 50px;
    margin-top: 23px;
    background: #f5f5f5;
    border: none;
    outline: none;
  }
`;
export default function AutoComp() {
  return (
    <Section>
      <Stack spacing={1} sx={{ width: 300 }}>
        <Autocomplete
          className="search"
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={Data.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              className="mytext"
              placeholder="Search Daraz"
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Stack>
    </Section>
  );
}
