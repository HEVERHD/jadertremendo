import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../images/logo.png'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Fire glow radial */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,80,0,0.18) 0%, transparent 70%)',
            }}
          />

          {/* Logo */}
          <motion.img
            src={logoImg}
            alt="Jader Tremendo"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 1.15, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 1.0, ease: 'easeOut', times: [0, 0.7, 1] }}
            className="w-28 h-28 object-contain"
            style={{
              filter:
                'drop-shadow(0 0 24px rgba(255,80,0,0.9)) drop-shadow(0 0 60px rgba(255,20,20,0.5))',
            }}
          />

          {/* Nombre */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-5 text-center select-none"
          >
            <p className="font-black text-xl tracking-[0.18em] uppercase text-white">Jader</p>
            <p
              className="font-black text-2xl tracking-[0.1em] uppercase"
              style={{
                background: 'linear-gradient(180deg, #FF6B00, #FF1414)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 10px rgba(255,80,0,0.9))',
              }}
            >
              Tremendo
            </p>
          </motion.div>

          {/* Barra de carga */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-14 w-40 h-px rounded-full overflow-hidden"
            style={{ background: 'rgba(255,107,0,0.15)' }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
              className="h-full w-full origin-left rounded-full"
              style={{
                background: 'linear-gradient(90deg, #FF4500, #FFD700, #FF4500)',
                boxShadow: '0 0 8px rgba(255,107,0,0.9)',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
