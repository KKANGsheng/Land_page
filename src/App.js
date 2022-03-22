import React from "react"
import './index';
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Food from "./components/Food"
import Footer from "./components/Footer"

// // Import images
// import img1 from "./assets/craft1.jpg"
// import img2 from "./assets/craft2.jpg"
// import img3 from "./assets/chicken.jpg"
// import img4 from "./assets/burger.jpg"
// import Bg from "./assets/hero-bg.jpg"

import  sushi1  from './assets/sushi1.jpg'
import  sushi2 from './assets/sushi2.jpg'
import  sushi3 from './assets/sushi3.jpg'
import  sushi4 from './assets/sushi4.jpg'




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Food
      bgImg={sushi1} />
      <Food
      bgImg={sushi2} />
      <Food
      bgImg1={sushi3}
      bgImg2={sushi4}/>
      <Footer/>
    </div>

  );
}

export default App;
