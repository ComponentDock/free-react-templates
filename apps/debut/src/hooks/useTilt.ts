import { useEffect, useRef, type RefObject } from 'react'

/**
 * Subtle pointer tilt: the element leans toward the cursor and springs back on
 * leave. Off entirely for visitors who prefer reduced motion.
 */
export function useTilt<T extends HTMLElement>(max = 20, scale = 1.1): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current!
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.style.transition = 'transform .3s cubic-bezier(.03,.98,.52,.99)'
    el.style.willChange = 'transform'

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      const rotateX = (max / 2 - py * max).toFixed(2)
      const rotateY = (px * max - max / 2).toFixed(2)
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
    }

    const onLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max, scale])

  return ref
}
