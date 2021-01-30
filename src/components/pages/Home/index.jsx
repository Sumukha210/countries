import React from "react";
import DisplayCountries from "./DisplayCountries";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <DisplayCountries />
    </div>
  );
};

export default Home;
