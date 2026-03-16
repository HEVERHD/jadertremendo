import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import slider5 from '../images/slider5.jpg'

const slides = [
  { src: slider1, caption: 'El del hp momento' },
  { src: slider2, caption: 'Eso es todo' },
  { src: slider3, caption: 'Buscalooo' },
  { src: slider4, caption: 'N O R M A L' },
  { src: slider5, caption: 'Viene la vaina.' },
]

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="w-full py-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <p className="text-neon-orange/70 text-xs uppercase tracking-[0.3em] mb-3">
          Momentos
        </p>
        <h2 className="section-title text-white mb-4">
          Gale<span className="text-neon-red neon-text">ría</span>
        </h2>
        <div className="neon-line" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          loop
          className="py-10 pb-14"
        >
          {slides.map(({ src, caption }) => (
            <SwiperSlide
              key={caption}
              className="rounded-2xl overflow-hidden"
              style={{ width: 'min(280px, 75vw)' }}
            >
              <div className="relative group cursor-grab active:cursor-grabbing">
                <img
                  src={src}
                  alt={caption}
                  className="w-full h-72 object-cover rounded-2xl block"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-2xl" />
                {/* Neon border on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-red/40 transition-all duration-300"
                  style={{ boxShadow: 'inset 0 0 0 0 transparent' }}
                />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm tracking-wide">{caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
