import { cn } from '@free-react-templates/ui'

/** The single photograph the panel carries, held as a cover-sized layer. */
const PHOTO = 'https://picsum.photos/seed/prologue-hollow/1200/900'

export interface PhotoPanelProps {
  className?: string
}

/**
 * The photographic side of the split: one empty box whose own background image
 * covers it, centred, with no repeat. It is deliberately childless — there is
 * no caption, button or overlay on it, and nothing cycles or fades. When the
 * split stacks it becomes a fixed 500px band under the white panel.
 */
export function PhotoPanel({ className }: PhotoPanelProps) {
  return (
    <div
      aria-hidden="true"
      data-testid="photo-panel"
      style={{ backgroundImage: `url('${PHOTO}')` }}
      className={cn(
        'w-[63%] bg-cover bg-center bg-no-repeat',
        'max-[1200px]:w-[40%]',
        'max-[992px]:h-[500px] max-[992px]:w-full',
        className,
      )}
    />
  )
}
