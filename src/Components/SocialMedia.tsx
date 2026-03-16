import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const socials = [
  {
    icon: FaFacebook,
    label: 'Facebook',
    handle: 'JaderTremendoP',
    href: 'https://www.facebook.com/JaderTremendoP',
    hoverColor: '#1877F2',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    handle: '@jadertremendo',
    href: 'https://www.instagram.com/jadertremendo',
    hoverColor: '#E1306C',
  },
  {
    icon: FaTiktok,
    label: 'TikTok',
    handle: '@jadertremendopera',
    href: 'https://www.tiktok.com/@jadertremendopera',
    hoverColor: '#ffffff',
  },
  {
    icon: FaYoutube,
    label: 'YouTube',
    handle: 'Canal oficial',
    href: 'https://www.youtube.com/channel/UCRlcmj_kyKZEVWPZmY_YoKQ',
    hoverColor: '#FF1414',
  },
]

export default function SocialMedia() {
  return (
    <section
      id="redes-sociales"
      className="w-full py-20 px-4 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-neon-orange/70 text-xs uppercase tracking-[0.3em] mb-3">
          Sígueme
        </p>
        <h2 className="section-title text-white mb-4">
          Redes <span className="text-neon-red neon-text">Sociales</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      {/* 2x2 grid on mobile, 4 cols on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
        {socials.map(({ icon: Icon, label, handle, href, hoverColor }, i) => (
          <motion.a
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card flex flex-col items-center gap-2 py-6 px-3 text-white/50 transition-all duration-300 group hover:border-white/20"
          >
            <Icon
              className="text-4xl transition-colors duration-300"
              style={{ '--hover-color': hoverColor } as React.CSSProperties}
            />
            <span className="text-xs font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
              {label}
            </span>
            <span className="text-[10px] text-white/30 truncate w-full text-center">
              {handle}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
