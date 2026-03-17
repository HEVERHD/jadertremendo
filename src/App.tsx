import { useState, useEffect, useRef } from 'react'
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
  const [showConfetti, setShowConfetti] = useState(false)
  const [needsInteraction, setNeedsInteraction] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const playedRef = useRef(false)

  const activateAudio = () => {
    if (playedRef.current || !audioRef.current) return
    audioRef.current.muted = true
    audioRef.current.play()
      .then(() => {
        audioRef.current!.muted = false
        playedRef.current = true
        setNeedsInteraction(false)
      })
      .catch(() => {})
  }

  useEffect(() => {
    const audio = new Audio('/conustedes.mp3')
    audio.loop = false
    audio.volume = 0.6
    audioRef.current = audio

    // Lanzar confetti 4 segundos antes de que termine el audio
    const handleTimeUpdate = () => {
      if (audio.duration && audio.currentTime >= audio.duration - 4) {
        setShowConfetti(true)
        audio.removeEventListener('timeupdate', handleTimeUpdate)
      }
    }
    audio.addEventListener('timeupdate', handleTimeUpdate)

    // Autoplay desktop: arrancar muted y desmutear enseguida
    audio.muted = true
    audio.play()
      .then(() => {
        audio.muted = false
        playedRef.current = true
      })
      .catch(() => {
        // Móvil: mostrar hint para tocar el título
        setNeedsInteraction(true)
      })

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.pause()
      audio.src = ''
    }
  }, [])

  return (
    <div className="bg-dark text-white min-h-screen">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={900}
          colors={['#FF1414', '#FF6B00', '#ffffff', '#FF0080', '#FFD700', '#FF4500']}
          gravity={0.04}
          friction={0.99}
          initialVelocityY={3}
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, pointerEvents: 'none' }}
        />
      )}
      <Navbar />
      <main>
        <Hero showHint={needsInteraction} onActivate={activateAudio} />
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
