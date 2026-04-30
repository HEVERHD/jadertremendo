import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Solo en dispositivos con mouse real
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'

    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`
        ref.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        fontSize: '1.3rem',
        lineHeight: 1,
        userSelect: 'none',
        opacity: 0,
        filter:
          'drop-shadow(0 0 6px rgba(255,215,0,1)) drop-shadow(0 0 14px rgba(255,215,0,0.7))',
        willChange: 'transform',
        transition: 'transform 0.03s linear',
      }}
    >
      ⚡
    </div>
  )
}
