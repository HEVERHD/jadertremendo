import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import { SiSpotify, SiApplemusic, SiYoutubemusic } from 'react-icons/si'

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
      style={{ background: 'linear-gradient(180deg, #000 0%, #000a02 50%, #000 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-neon-gold/70 text-xs uppercase tracking-[0.3em] mb-3">
          Lo más reciente
        </p>
        <h2 className="section-title text-white mb-4">
          Nuevos <span className="text-neon-gold neon-text">Candelazos</span>
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
          style={{ background: 'linear-gradient(135deg, rgba(255,215,0,0.6), rgba(0,181,80,0.4), rgba(255,20,20,0.3))' }}
        >
          <div className="glass-card overflow-hidden relative rounded-2xl">
            {/* Badge */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-sm shadow-neon-sm"
              style={{ background: 'linear-gradient(135deg, #CC0000, #FFD700)' }}
            >
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

        {/* Botones de streaming */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 flex items-center justify-center gap-3 flex-wrap"
        >
          <p className="w-full text-center text-white/30 text-[10px] uppercase tracking-[0.25em] mb-1">
            Escúchalo en
          </p>

          {/* Spotify */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              background: 'rgba(30,215,96,0.12)',
              border: '1px solid rgba(30,215,96,0.3)',
              color: '#1ED760',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(30,215,96,0.22)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(30,215,96,0.12)' }}
          >
            <SiSpotify className="text-base" />
            Spotify
          </motion.a>

          {/* Apple Music */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              background: 'rgba(252,60,68,0.12)',
              border: '1px solid rgba(252,60,68,0.3)',
              color: '#FC3C44',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(252,60,68,0.22)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(252,60,68,0.12)' }}
          >
            <SiApplemusic className="text-base" />
            Apple Music
          </motion.a>

          {/* YouTube Music */}
          <motion.a
            href={`https://www.youtube.com/watch?v=RRK_e09sgxA`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
            style={{
              background: 'rgba(255,20,20,0.12)',
              border: '1px solid rgba(255,20,20,0.3)',
              color: '#FF1414',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,20,20,0.22)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,20,20,0.12)' }}
          >
            <SiYoutubemusic className="text-base" />
            YouTube
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
