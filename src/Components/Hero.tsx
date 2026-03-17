import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import bannerImg from '../images/banner.png'

// Stagger animation for individual letters
const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.07, ease: 'easeOut' },
  }),
  activated: (i: number) => ({
    y: [0, -28, 8, -14, 0],
    scale: [1, 1.35, 0.85, 1.15, 1],
    rotateZ: [0, -12, 12, -6, 0],
    transition: { duration: 0.55, delay: i * 0.055, ease: 'easeInOut' },
  }),
}

const letterVariantsUp = {
  hidden: { opacity: 0, y: -60, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.5, delay: 0.7 + i * 0.07, ease: 'easeOut' },
  }),
  activated: (i: number) => ({
    y: [0, -36, 10, -18, 0],
    scale: [1, 1.5, 0.8, 1.2, 1],
    rotateZ: [0, 10, -10, 5, 0],
    filter: [
      'drop-shadow(0 0 12px rgba(255,60,0,0.9)) drop-shadow(0 0 30px rgba(255,20,20,0.6))',
      'drop-shadow(0 0 40px rgba(255,150,0,1)) drop-shadow(0 0 80px rgba(255,60,0,1))',
      'drop-shadow(0 0 20px rgba(255,60,0,0.9)) drop-shadow(0 0 40px rgba(255,20,20,0.7))',
      'drop-shadow(0 0 35px rgba(255,120,0,1)) drop-shadow(0 0 60px rgba(255,40,0,0.9))',
      'drop-shadow(0 0 12px rgba(255,60,0,0.9)) drop-shadow(0 0 30px rgba(255,20,20,0.6))',
    ],
    transition: { duration: 0.6, delay: i * 0.055, ease: 'easeInOut' },
  }),
}

// ─── CountUp: contador animado al entrar en viewport ─────────────────────────
function CountUp({ end, format }: { end: number; format: (n: number) => string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = performance.now()
          const duration = 1800
          const animate = (now: number) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3)
            setCount(Math.round(eased * end))
            if (t < 1) requestAnimationFrame(animate)
            else setCount(end)
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])

  return <span ref={ref}>{format(count)}</span>
}

// ─── Stats data ───────────────────────────────────────────────────────────────
const statsData = [
  { end: 10,  format: (n: number) => `${n}+`,                              label: 'Años'  },
  { end: 500, format: (n: number) => `${n}+`,                              label: 'Shows' },
  { end: 10,  format: (n: number) => `${(n / 10).toFixed(n < 10 ? 1 : 0)}M+`, label: 'Fans'  },
]

// ─── Props ────────────────────────────────────────────────────────────────────
interface HeroProps {
  showHint?: boolean
  onActivate?: () => void
}

export default function Hero({ showHint = false, onActivate }: HeroProps) {
  const [particlesReady, setParticlesReady] = useState(false)
  const [letterState, setLetterState] = useState<'visible' | 'activated'>('visible')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  // Glitch aleatorio cada 4-9 segundos
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const schedule = () => {
      timeout = setTimeout(() => {
        setIsGlitching(true)
        setTimeout(() => {
          setIsGlitching(false)
          schedule()
        }, 400)
      }, 4000 + Math.random() * 5000)
    }
    schedule()
    return () => clearTimeout(timeout)
  }, [])

  const handleTitleClick = () => {
    if (!onActivate) return
    setLetterState('activated')
    onActivate()
    setTimeout(() => setLetterState('visible'), 900)
  }

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Fire glow from bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,80,0,0.25) 0%, rgba(255,20,20,0.12) 40%, transparent 70%)',
        }}
      />

      {/* Center burst glow behind title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 52%, rgba(255,40,0,0.18) 0%, transparent 65%)',
        }}
      />

      {/* Fire sparks particles */}
      {particlesReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 pointer-events-none"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: ['#FF1414', '#FF6B00', '#FFD700', '#FF4500', '#FF8C00'] },
              links: { enable: false },
              move: {
                enable: true,
                speed: { min: 1.5, max: 4 },
                direction: 'top',
                random: true,
                straight: false,
                outModes: { default: 'out', top: 'out', bottom: 'none' },
              },
              number: {
                density: { enable: true },
                value: 90,
              },
              opacity: {
                value: { min: 0.2, max: 0.8 },
                animation: { enable: true, speed: 1.5, sync: false },
              },
              shape: { type: 'circle' },
              size: {
                value: { min: 1, max: 4 },
                animation: { enable: true, speed: 3, sync: false },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-sm"
          style={{
            background: 'rgba(255,80,0,0.15)',
            border: '1px solid rgba(255,107,0,0.4)',
            boxShadow: '0 0 20px rgba(255,80,0,0.2)',
          }}
        >
          <span className="text-base">🔥</span>
          <span className="text-xs font-bold uppercase tracking-[0.25em]"
            style={{ color: '#FF8C00' }}>
            DJ · Animador · Productor de Champeta
          </span>
          <span className="text-base">🔥</span>
        </motion.div>

        {/* JADER — letters fall from top */}
        <div
          className={`leading-none mb-1 perspective-[600px] relative${isGlitching ? ' glitch-active' : ''}`}
          onClick={showHint ? handleTitleClick : undefined}
          style={showHint ? { cursor: 'pointer' } : {}}
        >
          {/* Hint para móviles */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: [0.6, 1, 0.6], y: [0, -4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full whitespace-nowrap z-20"
              style={{
                background: 'rgba(255,80,0,0.2)',
                border: '1px solid rgba(255,107,0,0.5)',
                boxShadow: '0 0 16px rgba(255,69,0,0.4)',
              }}
            >
              <span className="text-sm">🔊</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#FF8C00' }}>
                Toca para escuchar
              </span>
            </motion.div>
          )}
          <div className="flex justify-center overflow-hidden">
            {'JADER'.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={letterState}
                className="inline-block font-black uppercase text-white"
                style={{
                  fontSize: 'clamp(3.5rem, 14vw, 8rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 30px rgba(0,0,0,0.8)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* TREMENDO — letters rise from bottom with fire glow */}
          <div className="flex justify-center overflow-visible">
            {'TREMENDO'.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariantsUp}
                initial="hidden"
                animate={letterState}
                className="inline-block font-black uppercase"
                style={{
                  fontSize: 'clamp(3.5rem, 14vw, 8rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  transformStyle: 'preserve-3d',
                  background: 'linear-gradient(180deg, #FF6B00 0%, #FF1414 50%, #CC0000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 12px rgba(255,60,0,0.9)) drop-shadow(0 0 30px rgba(255,20,20,0.6))',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div> {/* end perspective wrapper */}

        {/* Fire divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="my-7 w-48 h-0.5 rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #FF4500, #FFD700, #FF4500, transparent)',
            boxShadow: '0 0 16px rgba(255,69,0,0.9), 0 0 30px rgba(255,100,0,0.4)',
          }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.5, type: 'spring', bounce: 0.4 }}
        >
          <motion.a
            href="#lanzamientos"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl font-black text-white uppercase tracking-widest text-sm transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #FF4500, #FF1414, #CC0000)',
              boxShadow: '0 0 30px rgba(255,69,0,0.7), 0 0 60px rgba(255,20,20,0.3), 0 6px 20px rgba(0,0,0,0.5)',
            }}
          >
            <span className="text-xl">🔥</span>
            <span>Vamo&apos; alla</span>
            <span className="text-xl">🔥</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-12 flex items-center gap-10"
        >
          {statsData.map(({ end, format, label }, i) => (
            <div key={label} className="text-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + i * 0.1, type: 'spring', bounce: 0.5 }}
                className="text-2xl sm:text-3xl font-black"
                style={{
                  background: 'linear-gradient(180deg, #fff 30%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <CountUp end={end} format={format} />
              </motion.p>
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(255,107,0,0.4)' }}>scroll</span>
          <div className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, rgba(255,69,0,0.8), transparent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
