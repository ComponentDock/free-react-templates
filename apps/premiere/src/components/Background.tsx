import { cn } from '@free-react-templates/ui'
import { useSlideshow } from '../hooks/useSlideshow'

/** Three deterministic placeholder photos stand in for the design's backdrop set. */
const PHOTOS = [
  { seed: 'premiere-bg-1', alt: '' },
  { seed: 'premiere-bg-2', alt: '' },
  { seed: 'premiere-bg-3', alt: '' },
] as const

export interface BackgroundProps {
  className?: string
}

/**
 * Fixed, full-viewport photo layer that cross-fades between its photos, with the
 * design's rgba(0,0,0,0.8) wash sitting between the photos and the content.
 */
export function Background({ className }: BackgroundProps) {
  const active = useSlideshow(PHOTOS.length)

  return (
    <div aria-hidden="true" className={cn('fixed inset-0 z-0 overflow-hidden', className)}>
      {PHOTOS.map((photo, index) => (
        <img
          key={photo.seed}
          src={`https://picsum.photos/seed/${photo.seed}/1920/1200`}
          alt={photo.alt}
          data-active={index === active}
          className={cn(
            'absolute inset-0 size-full object-cover transition-opacity duration-1000',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div className="absolute inset-0 bg-overlay" />
    </div>
  )
}
