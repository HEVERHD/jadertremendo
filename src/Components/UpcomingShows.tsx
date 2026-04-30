import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

const shows = [
  {
    id: 1,
    city: 'ARUBA',
    country: '🇦🇼',
    description:
      'TU LO PEDISTE Y LO VAMOS HACER REAL — Llega el DJ que representa la Champeta a nivel internacional con la ráfaga de música nueva.',
    date: '30',
    month: 'MAY',
    year: '2026',
    flyer: '/showaruba.jpg',
    whatsapp: '2975611256',
    whatsappText: 'Hola! Quiero información sobre las preventas para el show de Aruba el 30 de mayo.',
    tag: 'Internacional',
  },
]

export default function UpcomingShows() {
  return (
    <section
      id="shows"
      className="w-full py-20 px-4 md:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #03020a 50%, #000 100%)' }}
    >
      {/* Glow de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,215,0,0.07) 0%, rgba(0,181,80,0.05) 50%, transparent 70%)' }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <p className="text-neon-gold/70 text-xs uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
          <FaMapMarkerAlt className="text-xs" />
          Próxima parada
        </p>
        <h2 className="section-title text-white mb-4">
          Próximos <span className="text-neon-gold neon-text">Shows</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-8">
        {shows.map((show, i) => (
          <motion.div
            key={show.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(0,181,80,0.05), rgba(255,20,20,0.06))',
              border: '1px solid rgba(255,215,0,0.2)',
              boxShadow: '0 0 40px rgba(255,215,0,0.08), 0 8px 32px rgba(0,0,0,0.6)',
            }}
          >
            {/* Layout: imagen izq + info der en desktop */}
            <div className="flex flex-col md:flex-row">

              {/* Flyer */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="md:w-2/5 relative overflow-hidden"
                style={{ minHeight: '280px' }}
              >
                <img
                  src={show.flyer}
                  alt={`Show Aruba ${show.date} ${show.month}`}
                  className="w-full h-full object-cover object-center"
                  style={{ minHeight: '280px' }}
                />
                {/* Gradiente hacia la derecha en desktop */}
                <div className="hidden md:block absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, transparent 60%, rgba(0,0,0,0.9) 100%)' }}
                />
                {/* Gradiente hacia abajo en mobile */}
                <div className="md:hidden absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.95) 100%)' }}
                />

                {/* Tag internacional */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-black"
                  style={{ background: 'linear-gradient(135deg, #FFD700, #FFAA00)' }}
                >
                  ⚡ {show.tag}
                </div>
              </motion.div>

              {/* Info */}
              <div className="md:w-3/5 flex flex-col justify-center gap-5 p-7 md:p-10">

                {/* Fecha grande */}
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: 'clamp(4rem, 10vw, 6rem)',
                      background: 'linear-gradient(180deg, #FFD700, #FF8C00)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.5))',
                    }}
                  >
                    {show.date}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-white font-black text-2xl md:text-3xl uppercase tracking-wider">
                      {show.month}
                    </span>
                    <span className="text-white/30 text-sm font-semibold tracking-widest">
                      {show.year}
                    </span>
                  </div>
                </div>

                {/* Ciudad */}
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{show.country}</span>
                  <h3
                    className="font-black text-3xl md:text-4xl uppercase tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {show.city}
                  </h3>
                </div>

                {/* Descripción */}
                <p className="text-white/55 text-sm md:text-base leading-relaxed">
                  {show.description}
                </p>

                {/* CTA */}
                <motion.a
                  href={`https://wa.me/${show.whatsapp}?text=${encodeURIComponent(show.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-3 self-start px-7 py-3.5 rounded-xl font-black text-sm uppercase tracking-widest text-black"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #FFAA00)',
                    boxShadow: '0 0 25px rgba(255,215,0,0.5), 0 4px 14px rgba(0,0,0,0.4)',
                  }}
                >
                  <FaWhatsapp className="text-lg" />
                  Preventas
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
