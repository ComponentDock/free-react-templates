import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

/** The photographs the panel fades between, in design order. */
const PHOTOS: readonly string[] = [
  'https://picsum.photos/seed/looming-bg1/950/900',
  'https://picsum.photos/seed/looming-bg2/950/900',
  'https://picsum.photos/seed/looming-bg3/950/900',
]

/** How long each photograph is held before the next one fades in. */
const HOLD_MS = 7000

/** Length of the opacity cross-fade between two photographs. */
const FADE_MS = 1000

/** True when the visitor asked their system for less motion. */
function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export interface SlideshowProps {
  /** Photographs to fade between — the design ships three, more cycle too. */
  photos?: readonly string[]
  className?: string
}

/**
 * The photographic half's background: one layer filling the panel behind its
 * content, holding every photograph as a `cover`-sized panel with the active
 * one opaque, so the 1000 ms opacity transition reads as a cross-fade. The
 * cycle stays on the first photograph when the visitor prefers reduced motion,
 * and the timer is cleared on unmount.
 */
export function Slideshow({ photos = PHOTOS, className }: SlideshowProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (photos.length < 2 || prefersReducedMotion()) {
      return
    }

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % photos.length)
    }, HOLD_MS)

    return () => clearInterval(timer)
  }, [photos])

  return (
    <div
      aria-hidden="true"
      data-testid="slideshow"
      className={cn('absolute inset-0 z-[-1] h-full w-full', className)}
    >
      {photos.map((photo, index) => (
        <div
          key={photo}
          data-testid={`slide-${index}`}
          data-active={index === active}
          style={{ backgroundImage: `url('${photo}')`, transitionDuration: `${FADE_MS}ms` }}
          className={cn(
            'absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </div>
  )
}
