import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'

/** The photographs the backdrop fades between, in design order. */
const PHOTOS: readonly string[] = [
  'https://picsum.photos/seed/pending-bg1/1900/900',
  'https://picsum.photos/seed/pending-bg2/1900/900',
  'https://picsum.photos/seed/pending-bg3/1900/900',
  'https://picsum.photos/seed/pending-bg4/1900/900',
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
  /** Photographs to fade between — the design ships four, more cycle too. */
  photos?: readonly string[]
  className?: string
}

/**
 * The page backdrop: ONE viewport-fixed layer over a black ground, holding every
 * photograph as a `cover`-sized, centred, non-repeating panel with the active one
 * opaque, so the 1000 ms opacity transition reads as a cross-fade. The cycle
 * stays on the first photograph when the visitor prefers reduced motion, and the
 * timer is retired on unmount.
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
      className={cn('fixed inset-0 z-0 block h-full w-full bg-black', className)}
    >
      {photos.map((photo, index) => (
        <div
          key={photo}
          data-testid={`slide-${index}`}
          data-active={index === active}
          style={{ backgroundImage: `url('${photo}')`, transitionDuration: `${FADE_MS}ms` }}
          className={cn(
            'absolute inset-0 block bg-cover bg-center bg-no-repeat transition-opacity',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
    </div>
  )
}
