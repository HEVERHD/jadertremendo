import { motion } from 'framer-motion'
import YouTube from 'react-youtube'

// Height/width controlled by CSS wrapper — these are just required by the API
const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 1 as const,
    mute: 1 as const,
    rel: 0 as const,
  },
}

export default function NewReleases() {
  return (
    <section
      id="lanzamientos"
      className="w-full py-20 px-4 flex flex-col items-center"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0a0000 50%, #000 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-neon-orange/70 text-xs uppercase tracking-[0.3em] mb-3">
          Lo más reciente
        </p>
        <h2 className="section-title text-white mb-4">
          Nuevos <span className="text-neon-red neon-text">Candelazos</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full max-w-2xl"
      >
        {/* Outer glow ring */}
        <div className="relative rounded-2xl p-px"
          style={{ background: 'linear-gradient(135deg, rgba(255,20,20,0.6), rgba(255,107,0,0.4), rgba(255,20,20,0.1))' }}
        >
          <div className="glass-card overflow-hidden relative rounded-2xl">
            {/* Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-red backdrop-blur-sm shadow-neon-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-white text-xs font-bold uppercase tracking-widest">
                Nuevo
              </span>
            </div>
            {/* Responsive 16:9 wrapper */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <YouTube
                videoId="RRK_e09sgxA"
                opts={opts}
                className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
