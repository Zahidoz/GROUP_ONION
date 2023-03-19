import React from "react";
import Hero from "../Components/Hero/Hero";
import Nav from '../Components/Nav/Nav'
import '../styles/reset.css'
import CardsC from "../Components/CardsC/CardsC";

const MainPage = () => {

  return (
    <>
      <Nav />
      <Hero/>
      <CardsC/>
    </>
  );
}

export default MainPage
