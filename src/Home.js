import Header from "./Components/Navbar/Header";
import "./App.css";
import Salider from "./Components/Salide";
import TopHeader from "./Components/Navbar/TopHeader";
import Catagore from "./Components/Categories/Catagore";
import FlashSale from "./Components/FlashSale/FlashSale";
import styled from "styled-components";
import FlashProducts from "./Components/FlashSale/FlashProducts";

import JustMain from "./Components/JustForYou/JustMain";

import CategoriMain from "./Components/PCategories/CategoriMain";
import Footer from "./Components/Footer/Footer";
import LodeMorefile from "./Components/LodeMore/LodeMorefile";

const Sectivon = styled.section`
  background: #f5f5f5;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Sectivon>
      <TopHeader />
      <Header />
      <Salider />
      <Catagore />
      <FlashSale />
      <FlashProducts />
      <CategoriMain />
      <JustMain />
      <LodeMorefile />
      <Footer />
    </Sectivon>
  );
};

export default Home;
