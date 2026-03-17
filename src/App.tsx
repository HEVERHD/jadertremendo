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

  // Activar audio desde gesto del usuario (toque en el título)
  const activateAudio = () => {
    if (!audioRef.current) return
    const audio = audioRef.current
    audio.pause()
    audio.currentTime = 0   // reiniciar desde el inicio
    audio.muted = false
    audio.play()
      .then(() => {
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

    // Confetti 4 segundos antes de que termine
    const handleTimeUpdate = () => {
      if (audio.duration && !confettiFiredRef.current && audio.currentTime >= audio.duration - 4) {
        confettiFiredRef.current = true
        setShowConfetti(true)
      }
    }
    audio.addEventListener('timeupdate', handleTimeUpdate)

    // Móvil/iOS: mostrar hint siempre — NO marcar playedRef aquí
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      || navigator.maxTouchPoints > 1
    if (isMobile) setNeedsInteraction(true)

    // Intentar autoplay silencioso (funciona en desktop, Android)
    audio.muted = true
    audio.play()
      .then(() => {
        audio.muted = false
        if (!isMobile) {
          // Desktop: autoplay con sonido confirmado
          playedRef.current = true
        }
        // Móvil: no marcamos playedRef, el hint permanece para que el usuario toque
      })
      .catch(() => {
        setNeedsInteraction(true)
      })

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
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
