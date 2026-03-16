import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import bannerImg from '../images/banner.png'

export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with better positioning */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      {/* Radial neon glow center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,20,20,0.12)_0%,transparent_70%)]" />

      {/* Particles */}
      {particlesReady && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 pointer-events-none"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: ['#FF1414', '#FF6B00', '#ffffff'] },
              links: {
                color: '#FF1414',
                distance: 130,
                enable: true,
                opacity: 0.12,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
              },
              number: {
                density: { enable: true },
                value: 50,
              },
              opacity: { value: { min: 0.2, max: 0.5 } },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full border border-neon-orange/30 bg-neon-orange/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-orange animate-pulse" />
          <span className="text-neon-orange text-xs font-semibold uppercase tracking-widest">
            DJ · Animador · Productor de Champeta
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="font-black uppercase leading-none mb-6"
        >
          <span className="block text-white text-6xl sm:text-8xl md:text-9xl tracking-tight drop-shadow-2xl">
            JADER
          </span>
          <span
            className="block text-neon-red text-6xl sm:text-8xl md:text-9xl tracking-tight animate-pulse-neon"
            style={{
              textShadow: '0 0 30px rgba(255,20,20,0.9), 0 0 60px rgba(255,20,20,0.5), 0 0 100px rgba(255,20,20,0.2)',
            }}
          >
            TREMENDO
          </span>
        </motion.h1>

        {/* Neon divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-32 h-0.5 rounded-full mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent, #FF1414, #FF6B00, transparent)',
            boxShadow: '0 0 12px rgba(255,20,20,0.8)',
          }}
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.a
            href="#lanzamientos"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white text-base uppercase tracking-widest transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FF1414, #FF6B00)',
              boxShadow: '0 0 25px rgba(255,20,20,0.5), 0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            <span>Vamo&apos; alla</span>
            <span className="text-lg">🔥</span>
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-12 flex items-center gap-8"
        >
          {[
            { value: '10+', label: 'Años' },
            { value: '500+', label: 'Shows' },
            { value: '1M+', label: 'Fans' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-white/25 text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-neon-red/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
