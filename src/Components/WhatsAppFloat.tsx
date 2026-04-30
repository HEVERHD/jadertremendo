import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const phone = '573145235053'
  const text = encodeURIComponent('Hola Jader! Quiero información sobre contrataciones para mi evento.')

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3.5, type: 'spring', bounce: 0.55 }}
      className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Badge flotante — aparece al hacer hover */}
      <motion.div
        initial={{ opacity: 0, x: 16, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 4.5, duration: 0.4 }}
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
        style={{
          background: 'rgba(0,0,0,0.85)',
          border: '1px solid rgba(255,215,0,0.35)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 14px rgba(255,215,0,0.2)',
        }}
      >
        <span style={{ color: '#FFD700' }}>⚡</span>
        <span>Disponible para eventos</span>
      </motion.div>

      {/* Botón principal */}
      <div className="relative">
        {/* Anillos de pulso */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(37,211,102,0.35)' }}
        />
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(37,211,102,0.2)', animationDelay: '0.6s' }}
        />

        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            boxShadow:
              '0 0 22px rgba(37,211,102,0.55), 0 0 45px rgba(37,211,102,0.2), 0 4px 14px rgba(0,0,0,0.45)',
          }}
        >
          <FaWhatsapp className="text-white text-2xl" />
        </motion.div>
      </div>
    </motion.a>
  )
}
