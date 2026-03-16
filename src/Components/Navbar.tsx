import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../images/logo.png'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Lanzamientos', href: '#lanzamientos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Clásicos', href: '#clasicos' },
  { label: 'About', href: '#about' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-12 h-16 md:h-18
        transition-all duration-500
        ${scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
        }
      `}
    >
      {/* Logo */}
      <a href="#inicio" className="flex items-center">
        <img
          src={logoImg}
          alt="Jader Tremendo"
          className="h-10 w-auto object-contain"
        />
      </a>

      {/* Desktop menu */}
      <ul className="hidden lg:flex items-center gap-1">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="
                relative px-4 py-2 text-sm font-medium uppercase tracking-widest
                text-white/60 hover:text-white transition-colors duration-200
                group
              "
            >
              {label}
              <span className="
                absolute bottom-0 left-0 w-0 h-0.5
                bg-gradient-to-r from-neon-red to-neon-orange
                group-hover:w-full transition-all duration-300
                shadow-[0_0_8px_rgba(255,20,20,0.8)]
              " />
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white origin-center transition-all"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white origin-center transition-all"
        />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-16 left-0 right-0
              bg-black/95 backdrop-blur-md
              border-b-2 border-neon-red
              shadow-[0_8px_32px_rgba(255,20,20,0.15)]
              lg:hidden
            "
          >
            <ul className="flex flex-col py-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={handleLinkClick}
                    className="
                      block px-8 py-4 text-sm font-medium uppercase tracking-widest
                      text-white/60 hover:text-white hover:bg-white/5
                      border-b border-white/5 transition-all duration-200
                    "
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
