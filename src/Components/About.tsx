import { motion } from 'framer-motion'
import aboutImg from '../images/about.png'

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-4 md:px-16 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] bg-neon-red/5 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 flex justify-center flex-shrink-0"
        >
          <div className="relative w-full max-w-xs md:max-w-sm">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl blur-2xl bg-neon-red/10" />
            {/* Border gradient */}
            <div className="absolute inset-0 rounded-2xl p-px"
              style={{ background: 'linear-gradient(135deg, rgba(255,20,20,0.4), transparent, rgba(255,107,0,0.2))' }}
            >
              <div className="w-full h-full rounded-2xl bg-dark" />
            </div>
            <img
              src={aboutImg}
              alt="Jader Tremendo"
              className="relative rounded-2xl w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full md:w-7/12 flex flex-col gap-6 text-center md:text-left"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight"
              style={{ color: '#FF1414', textShadow: '0 0 30px rgba(255,20,20,0.7), 0 0 60px rgba(255,20,20,0.3)' }}
            >
              RECUERDA
            </h2>
            <div className="neon-line mt-3 md:mx-0" />
          </div>

          <blockquote
            className="relative glass-card px-6 py-5"
            style={{ borderLeft: '3px solid #FF1414' }}
          >
            <span
              className="absolute -top-4 left-4 text-5xl font-black text-neon-red/30 leading-none select-none"
            >"</span>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed italic pt-2">
              Los locos abren los caminos que más tarde recorren los sabios.
            </p>
          </blockquote>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {['DJ', 'Animador', 'Productor Champeta'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-neon-red/30 text-neon-red/80 bg-neon-red/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
