import { motion } from 'framer-motion'
import YouTube from 'react-youtube'

const videos = [
  { id: 'Pn0d29RU_Xc', title: 'Clásico Vol. 1' },
  { id: '-CA_8Yel59Q', title: 'Clásico Vol. 2' },
]

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0 as const,
    rel: 0 as const,
  },
}

export default function Classics() {
  return (
    <section
      id="clasicos"
      className="w-full py-20 px-4 md:px-12"
      style={{ background: 'linear-gradient(180deg, #000 0%, #080808 50%, #000 100%)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-neon-orange/70 text-xs uppercase tracking-[0.3em] mb-3">
          Los de siempre
        </p>
        <h2 className="section-title text-white mb-4">
          Super <span className="text-neon-red neon-text">Clásicos</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {videos.map(({ id, title }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="glass-card overflow-hidden group hover:border-neon-red/40 transition-all duration-300"
            style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.5)' }}
          >
            {/* Card header */}
            <div className="px-4 pt-4 pb-3 flex items-center gap-2 border-b border-white/5">
              <span className="w-2 h-2 rounded-full bg-neon-red animate-pulse flex-shrink-0" />
              <p className="text-white/50 text-xs uppercase tracking-widest truncate">{title}</p>
            </div>
            {/* Responsive 16:9 video */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <YouTube
                videoId={id}
                opts={opts}
                className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
