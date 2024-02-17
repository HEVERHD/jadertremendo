import React, { useState } from 'react';

import Confetti from 'react-confetti';

import "./index.css"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import { Contact } from "./Components/Contact"
import Lanch from "./Components/Lanch"
import Clasic from "./Components/Clasics"
import DemoCarousel from "./Components/DemoCarousel"
import RedesSociales from "./Components/RedesSociales"
import Footer from "./Components/Footer"



function App() {
  const [isConfettiVisible, setConfettiVisible] = useState(true);

  const hideConfetti = () => {
    setConfettiVisible(false);
  };


  return (
    <>

{isConfettiVisible && (
        <Confetti
          width={475}
          height={4050}
          recycle={false}
          numberOfPieces={1000}
          run={isConfettiVisible}
          onAnimationEnd={hideConfetti}
          friction={0.95}
          colors={['#FF1414', '#ffc94b']}

     
        />
      )}
     <div className="App">
      <Navbar />
      <Header />
      <Lanch />
      <DemoCarousel />
      <Clasic />
      <About />
      <Contact />
      <RedesSociales />
      <Footer />
     </div>
    </>
  )
}

export default App
