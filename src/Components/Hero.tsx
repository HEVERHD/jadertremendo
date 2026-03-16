import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import bannerImg from '../images/banner.png'

// Stagger animation for individual letters
const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: 0.4 + i * 0.07, ease: 'easeOut' },
  }),
}

const letterVariantsUp = {
  hidden: { opacity: 0, y: -60, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: 0.7 + i * 0.07, ease: 'easeOut' },
  }),
}

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
        <div className="leading-none mb-1 perspective-[600px]">
          <div className="flex justify-center overflow-hidden">
            {'JADER'.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
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
                animate="visible"
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
        </div>

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
          {[
            { value: '10+', label: 'Años' },
            { value: '500+', label: 'Shows' },
            { value: '1M+', label: 'Fans' },
          ].map(({ value, label }, i) => (
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
                {value}
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
