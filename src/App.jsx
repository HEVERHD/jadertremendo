import React from "react"

import "./index.css"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import About from "./Components/About"
import { Contact } from "./Components/Contact"
import Lanch from "./Components/Lanch"
import Clasic from "./Components/Clasics"



function App() {
  return (
    <>
     <div className="App">
      <Navbar />
      <Header />
      <Lanch />
      <Clasic />
      <About />
      <Contact />
     </div>
    </>
  )
}

export default App