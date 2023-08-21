import React from "react";
import "../stylesheets/home.css";
import {useNavigate} from "react-router-dom"

import Header from "./header";
import Carousel from "./carousel";
import Grid from "./grid";
import Footer from "./footer";

const Home = () => {
  const navigate = useNavigate()

  return(
    <div>
     <Header />
     <Carousel />
     <Grid />
   <div className="home" >
    {/* <h1>Hello Homepage</h1>
    <div className="button" onClick={() => navigate("/login")} >Logout</div> */}
    <Footer />

  </div>
  </div>
  )
}

export default Home;
