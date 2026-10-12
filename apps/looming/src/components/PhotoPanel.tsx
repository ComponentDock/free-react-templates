import { cn } from '@free-react-templates/ui'
import { Slideshow } from './Slideshow'

export interface PhotoPanelProps {
  className?: string
}

/**
 * The photographic half of the split: a relatively positioned box that fills
 * its side of the row and carries the cross-fading layer behind its own
 * content, so the layer can never reach under the white panel. When the split
 * stacks it becomes a fixed 500px band.
 */
export function PhotoPanel({ className }: PhotoPanelProps) {
  return (
    <div
      data-testid="photo-panel"
      className={cn(
        'relative z-1 w-1/2 max-[1200px]:w-2/5',
        'max-[992px]:h-[500px] max-[992px]:w-full',
        className,
      )}
    >
      <Slideshow />
    </div>
  )
}
