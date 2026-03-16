import { useState } from 'react'
import Confetti from 'react-confetti'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import NewReleases from './Components/NewReleases'
import Gallery from './Components/Gallery'
import Classics from './Components/Classics'
import About from './Components/About'
import Contact from './Components/Contact'
import SocialMedia from './Components/SocialMedia'
import Footer from './Components/Footer'

function App() {
  const [showConfetti, setShowConfetti] = useState(true)

  return (
    <div className="bg-dark text-white min-h-screen">
      {showConfetti && (
        <Confetti
          numberOfPieces={800}
          colors={['#FF1414', '#FF6B00', '#ffffff', '#FF0080', '#FFD700']}
          friction={0.97}
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <Navbar />
      <main>
        <Hero />
        <NewReleases />
        <Gallery />
        <Classics />
        <About />
        <Contact />
        <SocialMedia />
      </main>
      <Footer />
    </div>
  )
}

export default App
