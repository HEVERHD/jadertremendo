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
import Loader from './Components/Loader'
import AudioProgress from './Components/AudioProgress'

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const [needsInteraction, setNeedsInteraction] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const playedRef = useRef(false)
  const confettiFiredRef = useRef(false)

  const setupTimeUpdate = (audio: HTMLAudioElement) => {
    const handler = () => {
      if (audio.duration && !confettiFiredRef.current && audio.currentTime >= audio.duration - 4) {
        confettiFiredRef.current = true
        setShowConfetti(true)
      }
    }
    audio.addEventListener('timeupdate', handler)
    return handler
  }

  // iOS Safari: el audio DEBE crearse y reproducirse dentro del gesto del usuario
  const activateAudio = () => {
    if (playedRef.current) return
    // Detener el audio previo (si existía del intento de autoplay)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
    }
    // Crear elemento nuevo dentro del gesto — requisito de iOS Safari
    const audio = new Audio('/conustedes.mp3')
    audio.volume = 0.6
    audioRef.current = audio
    confettiFiredRef.current = false
    setupTimeUpdate(audio)

    audio.play()
      .then(() => {
        playedRef.current = true
        setNeedsInteraction(false)
      })
      .catch(() => {})
  }

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || navigator.maxTouchPoints > 1

    if (isMobile) {
      // Móvil: mostrar hint, esperar gesto del usuario
      setNeedsInteraction(true)
      return
    }

    // Desktop: intentar autoplay silencioso
    const audio = new Audio('/conustedes.mp3')
    audio.loop = false
    audio.volume = 0.6
    audioRef.current = audio
    const handler = setupTimeUpdate(audio)

    audio.muted = true
    audio.play()
      .then(() => {
        audio.muted = false
        playedRef.current = true
      })
      .catch(() => {})

    return () => {
      audio.removeEventListener('timeupdate', handler)
      audio.pause()
      audio.src = ''
    }
  }, [])

  return (
    <>
      <Loader onComplete={() => setShowLoader(false)} />
      {!showLoader && <AudioProgress audioRef={audioRef} />}
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
      <div className="bg-dark text-white min-h-screen">
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
    </>
  )
}

export default App
