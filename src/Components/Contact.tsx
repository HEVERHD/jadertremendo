import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return
    const phone = '573145235053'
    const text = encodeURIComponent(`Hola! Soy ${form.name}. ${form.message}`)
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
  }

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 flex flex-col items-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #030000 50%, #000 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 blur-[100px] bg-green-900/20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 relative z-10"
      >
        <p className="text-neon-orange/70 text-xs uppercase tracking-[0.3em] mb-3 flex items-center justify-center gap-2">
          <FaCalendarAlt className="text-xs" />
          Contrata para tu evento
        </p>
        <h2 className="section-title text-white mb-4">
          Con<span className="text-neon-red neon-text">tacto</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-lg flex flex-col gap-4"
      >
        {/* Name input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-white/40 text-xs uppercase tracking-widest px-1">
            Tu nombre
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="¿Cómo te llamas?"
            required
            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm transition-all duration-300 focus:border-neon-red/40 focus:bg-white/8 focus:outline-none"
          />
        </div>

        {/* Message textarea */}
        <div className="flex flex-col gap-1.5">
          <label className="text-white/40 text-xs uppercase tracking-widest px-1">
            Tu mensaje
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Cuéntame sobre tu evento, fecha, lugar..."
            required
            rows={4}
            className="w-full px-4 py-3.5 rounded-xl resize-none bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm transition-all duration-300 focus:border-neon-red/40 focus:bg-white/8 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-3 text-sm uppercase tracking-widest transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #16a34a, #15803d)',
            boxShadow: '0 0 25px rgba(22,163,74,0.35), 0 4px 15px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(22,163,74,0.6), 0 4px 20px rgba(0,0,0,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 25px rgba(22,163,74,0.35), 0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          <FaWhatsapp className="text-xl" />
          Enviar por WhatsApp
        </motion.button>
      </motion.form>
    </section>
  )
}
