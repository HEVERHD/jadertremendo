import { useState } from 'react'
import { motion } from 'framer-motion'
import YouTube from 'react-youtube'
import {
  SiSpotify, SiApplemusic, SiYoutubemusic, SiYoutube,
  SiAmazonprime, SiTidal, SiDeezer, SiAudiomack,
} from 'react-icons/si'
import { FaPlay, FaFire, FaMusic } from 'react-icons/fa'

const streamingPlatforms = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLaA55CQqdTfs',
    Icon: SiYoutube,
    color: '#FF4444',
    bg: 'rgba(255,68,68,0.10)',
    border: 'rgba(255,68,68,0.30)',
    bgHover: 'rgba(255,68,68,0.20)',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/intl-es/album/3ZwhJ3yYdlxBUTiQDC2PE6?si=CQBuF0u4R3usZ9Nu0mq3ig&nd=1&dlsi=045506163e804615',
    Icon: SiSpotify,
    color: '#1ED760',
    bg: 'rgba(30,215,96,0.10)',
    border: 'rgba(30,215,96,0.30)',
    bgHover: 'rgba(30,215,96,0.20)',
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/albums/B0H897JNP5?ref=dm_ff_amazonmusic_3p&tag=featurefm-20',
    Icon: SiAmazonprime,
    color: '#00A8E0',
    bg: 'rgba(0,168,224,0.10)',
    border: 'rgba(0,168,224,0.30)',
    bgHover: 'rgba(0,168,224,0.20)',
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/playlist?list=OLAK5uy_nzQYmrFHlyVvHWw67_ORpADACi1HIzDE0',
    Icon: SiYoutubemusic,
    color: '#FF1414',
    bg: 'rgba(255,20,20,0.10)',
    border: 'rgba(255,20,20,0.30)',
    bgHover: 'rgba(255,20,20,0.20)',
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/album/541599105',
    Icon: SiTidal,
    color: '#00E5FF',
    bg: 'rgba(0,229,255,0.08)',
    border: 'rgba(0,229,255,0.25)',
    bgHover: 'rgba(0,229,255,0.16)',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/es/album/1024979351',
    Icon: SiDeezer,
    color: '#EF5466',
    bg: 'rgba(239,84,102,0.10)',
    border: 'rgba(239,84,102,0.30)',
    bgHover: 'rgba(239,84,102,0.20)',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/co/album/vibra-de-barrio-en-vivo/6790459166?at=1001lwQy&ct=FFM_70716d8e46d794702cbe052ea04ec0ed&ls=1&uo=4',
    Icon: SiApplemusic,
    color: '#FC3C44',
    bg: 'rgba(252,60,68,0.10)',
    border: 'rgba(252,60,68,0.30)',
    bgHover: 'rgba(252,60,68,0.20)',
  },
  {
    name: 'Claro Música',
    url: 'https://www.claromusica.com/embed/album/92097029/CO?theme=dark',
    Icon: FaMusic,
    color: '#E040FB',
    bg: 'rgba(224,64,251,0.08)',
    border: 'rgba(224,64,251,0.25)',
    bgHover: 'rgba(224,64,251,0.16)',
  },
  {
    name: 'Audiomack',
    url: 'https://audiomack.com/dj-jader-tremendo-1/album/vibra-de-barrio-en-vivo',
    Icon: SiAudiomack,
    color: '#FFA800',
    bg: 'rgba(255,168,0,0.10)',
    border: 'rgba(255,168,0,0.30)',
    bgHover: 'rgba(255,168,0,0.20)',
  },
]

const tracks = [
  { id: 'ydceB3vsXF4' },
  { id: '_6s265c4RhE' },
  { id: 'm_n0OE1HzMQ' },
  { id: 'uqMpR3MG4K8' },
  { id: 'bQ0tFekWCpU' },
  { id: 'qPLiqLDFBLQ' },
  { id: 'PZIIcpCrf80' },
  { id: 'SwSTLindldw' },
  { id: '9BfOqpreJRc' },
  { id: 'dWIdFOUmomw' },
]

export default function NewReleases() {
  const [activeIdx, setActiveIdx] = useState(0)

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1 as const,
      mute: 1 as const,
      rel: 0 as const,
    },
  }

  // Arranca muted (garantiza autoplay), luego desmutea al instante
  const handleReady = (e: { target: any }) => {
    try {
      e.target.unMute()
      e.target.setVolume(80)
      e.target.playVideo()
    } catch (_) {}
  }

  return (
    <section
      id="lanzamientos"
      className="relative w-full py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #110000 25%, #1c0000 50%, #110000 75%, #000 100%)' }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(220,30,0,0.9) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[300px] opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(255,200,0,0.9) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[300px] opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(255,200,0,0.9) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* ── HERO: portada + título ─────────────────────────── */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-14">

          {/* Portada */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 w-64 sm:w-80 md:w-96 relative"
          >
            {/* Halo giratorio */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute -inset-4 rounded-3xl opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, #FF1414, #FFD700, #FF6B00, #FF1414)',
                filter: 'blur(18px)',
              }}
            />
            {/* Glow estático */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-80"
              style={{
                background: 'radial-gradient(ellipse, rgba(255,100,0,0.6) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
            {/* Imagen flotante */}
            <motion.img
              src="/vibralanza.png"
              alt="La Vibra de Barrio – Jader Tremendo"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="relative z-10 w-full rounded-2xl select-none"
              style={{
                boxShadow: '0 8px 60px rgba(255,80,0,0.55), 0 30px 80px rgba(0,0,0,0.7)',
              }}
              draggable={false}
            />
          </motion.div>

          {/* Título + info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.35em] text-white mb-5"
              style={{
                background: 'linear-gradient(135deg, #b50000, #e63000, #FFD700)',
                boxShadow: '0 0 28px rgba(220,60,0,0.65)',
              }}
            >
              <FaFire className="animate-pulse" />
              Lanzamiento oficial
            </span>

            <h2
              className="font-black uppercase leading-[0.88] tracking-tight select-none text-[clamp(3rem,9vw,7rem)]"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FF6B00 40%, #FF1414 70%, #FFD700 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px rgba(255,100,0,0.8))',
              }}
            >
              La Vibra
            </h2>
            <h2
              className="font-black uppercase leading-[0.88] tracking-tight select-none text-[clamp(3rem,9vw,7rem)]"
              style={{
                background: 'linear-gradient(135deg, #FF1414 0%, #FFD700 55%, #FF1414 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px rgba(255,50,0,0.9))',
              }}
            >
              de Barrio
            </h2>

            <p className="text-white/35 text-[11px] uppercase tracking-[0.4em] mt-4 mb-6">
              Jader Tremendo · 2026
            </p>

            <div className="neon-line w-full" />
          </motion.div>
        </div>

        <div className="neon-line mb-12 w-full" />

        {/* Main video player */}
        <motion.div
          key={tracks[activeIdx].id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-3xl mb-6"
        >
          <div
            className="relative rounded-2xl p-[2px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,80,0,0.9), rgba(255,215,0,0.7), rgba(255,20,0,0.5))',
              boxShadow: '0 0 40px rgba(255,80,0,0.4), 0 0 80px rgba(255,80,0,0.15)',
            }}
          >
            <div className="overflow-hidden rounded-2xl">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <YouTube
                  key={tracks[activeIdx].id}
                  videoId={tracks[activeIdx].id}
                  opts={opts}
                  onReady={handleReady}
                  className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tracklist thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-3xl mb-12"
        >
          <p className="text-white/25 text-[9px] uppercase tracking-[0.35em] mb-3 text-center">
            Tracklist · {tracks.length} canciones
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {tracks.map((track, idx) => (
              <motion.button
                key={track.id}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={`https://img.youtube.com/vi/${track.id}/mqdefault.jpg`}
                  alt={`Canción ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: activeIdx === idx
                      ? 'rgba(255,180,0,0.18)'
                      : 'rgba(0,0,0,0.45)',
                  }}
                />
                {/* Track number */}
                <span
                  className="absolute bottom-1.5 left-2 text-[11px] font-black leading-none"
                  style={{ color: activeIdx === idx ? '#FFD700' : 'rgba(255,255,255,0.6)' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {/* Active: play indicator */}
                {activeIdx === idx && (
                  <>
                    <div className="absolute inset-0 rounded-xl border-2 border-neon-gold"
                      style={{ boxShadow: '0 0 14px rgba(255,215,0,0.5), inset 0 0 14px rgba(255,215,0,0.1)' }}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,215,0,0.9)', boxShadow: '0 0 12px rgba(255,215,0,0.7)' }}
                      >
                        <FaPlay className="text-black text-[10px] ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Streaming platforms grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-3xl"
        >
          <p className="text-center text-white/25 text-[9px] uppercase tracking-[0.3em] mb-5">
            Escúchalo en tu plataforma favorita
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {streamingPlatforms.map(({ name, url, Icon, color, bg, border, bgHover }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                style={{ background: bg, border: `1px solid ${border}`, color }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = bgHover }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = bg }}
              >
                <Icon className="text-base flex-shrink-0" />
                <span className="truncate">{name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
