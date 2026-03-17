import { useEffect, useRef, useState } from 'react'

interface AudioProgressProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
}

export default function AudioProgress({ audioRef }: AudioProgressProps) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const tick = () => {
      const audio = audioRef.current
      if (audio && audio.duration && !audio.paused) {
        setActive(true)
        setProgress(audio.currentTime / audio.duration)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [audioRef])

  if (!active) return null

  return (
    <div
      className="fixed top-0 left-0 z-[9998] h-[2px] pointer-events-none"
      style={{
        width: `${progress * 100}%`,
        transition: 'width 0.15s linear',
        background: 'linear-gradient(90deg, #FF1414, #FF6B00, #FFD700)',
        boxShadow: '0 0 6px rgba(255,107,0,0.9), 0 0 14px rgba(255,20,20,0.5)',
      }}
    />
  )
}
