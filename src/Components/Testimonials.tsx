import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote:
      'Jader Tremendo hizo que el evento de nuestra empresa fuera el más recordado de la historia. La energía que puso fue increíble, todo el mundo bailando hasta el amanecer.',
    name: 'Carlos Herrera',
    role: 'Evento Corporativo · Bogotá',
    stars: 5,
  },
  {
    quote:
      'Contratamos a Jader para mis 50 años y fue lo mejor que pude hacer. Conoce a la gente, sabe lo que le gusta, y la champeta que puso nos hizo volar. ¡Tremendo de verdad!',
    name: 'Adriana Morales',
    role: 'Fiesta Privada · Cartagena',
    stars: 5,
  },
  {
    quote:
      'Lo vi en un festival y no podía creer tanta potencia. Domina los ritmos, el público y el ambiente como nadie. El mejor DJ de champeta del Caribe sin duda.',
    name: 'Miguel Ángel Torres',
    role: 'Festival Champeta · Barranquilla',
    stars: 5,
  },
  {
    quote:
      'Mis 15 años fueron perfectos. Cumplió con todo lo prometido y más. La gente todavía me habla de lo buenísima que estuvo la fiesta gracias a Jader.',
    name: 'Valentina Restrepo',
    role: 'Quinceañero · Santa Marta',
    stars: 5,
  },
  {
    quote:
      'Show increíble en nuestra discoteca. Lleno total, filas afuera, y el público enloqueció. Jader es un profesional en todo el sentido de la palabra.',
    name: 'Andrés Ospino',
    role: 'Discoteca · Cartagena',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="w-full py-20 px-4 overflow-hidden relative"
      style={{ background: 'linear-gradient(180deg, #000 0%, #020500 50%, #000 100%)' }}
    >
      {/* Glow fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,181,80,0.04) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <p className="text-neon-gold/70 text-xs uppercase tracking-[0.3em] mb-3">
          Lo que dicen de Jader
        </p>
        <h2 className="section-title text-white mb-4">
          Testimo<span className="text-neon-gold neon-text">nios</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div
                className="glass-card p-7 flex flex-col gap-4 h-full"
                style={{
                  borderColor: 'rgba(255,215,0,0.12)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.5)',
                  minHeight: '220px',
                }}
              >
                {/* Estrellas */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <FaStar key={s} className="text-neon-gold text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/75 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Autor */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm text-black flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFAA00)' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/35 text-[10px] uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
