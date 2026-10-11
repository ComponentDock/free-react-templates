import { cn } from '@free-react-templates/ui'

/** Deterministic placeholder standing in for the design's single backdrop photo. */
const PHOTO = 'incoming-bg-1'

export interface BackgroundProps {
  className?: string
}

/**
 * Fixed, full-viewport photo layer: ONE static image (no slideshow, matching
 * the design), centred and covering the screen behind all content.
 */
export function Background({ className }: BackgroundProps) {
  return (
    <div aria-hidden="true" className={cn('fixed inset-0 z-0 overflow-hidden', className)}>
      <img
        src={`https://picsum.photos/seed/${PHOTO}/1600/1000`}
        alt=""
        className="absolute inset-0 size-full object-cover object-center"
      />
    </div>
  )
}
