import React from "react"

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
  return (
    <>
     <div className="App">
      <Navbar />
      <Header />
      <Lanch />
      <DemoCarousel />
      <Clasic />
      <About />
      <RedesSociales />
      <Contact />
      <Footer />
     </div>
    </>
  )
}

export default App
