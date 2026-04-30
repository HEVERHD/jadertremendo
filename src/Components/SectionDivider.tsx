import { motion } from 'framer-motion'

interface Props {
  className?: string
}

export default function SectionDivider({ className = '' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className={`w-full flex items-center gap-4 px-8 md:px-20 py-1 ${className}`}
    >
      {/* Línea izquierda: rojo → dorado */}
      <div
        className="flex-1 h-px rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,20,20,0.5), rgba(255,215,0,0.6))',
        }}
      />

      {/* Rayo central con glow */}
      <span
        className="text-lg flex-shrink-0 select-none"
        style={{
          filter:
            'drop-shadow(0 0 8px rgba(255,215,0,1)) drop-shadow(0 0 18px rgba(255,215,0,0.6))',
        }}
      >
        ⚡
      </span>

      {/* Línea derecha: dorado → verde */}
      <div
        className="flex-1 h-px rounded-full"
        style={{
          background: 'linear-gradient(90deg, rgba(255,215,0,0.6), rgba(0,181,80,0.5), transparent)',
        }}
      />
    </motion.div>
  )
}
