import { Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface PlayButtonProps {
  className?: string
}

/**
 * The circular play control under the headline: a transparent 60×60 button whose
 * visible disc is its own full-size white `::after` layer, so a hover fades that
 * disc to 60% and scales it to 125% while the near-black triangle stays put. The
 * design wires nothing to it — it is decorative, so it carries an accessible
 * name and no handler.
 */
export function PlayButton({ className }: PlayButtonProps) {
  return (
    <button
      type="button"
      aria-label="Play the background film"
      data-testid="play-button"
      className={cn(
        'relative z-[1] flex size-[60px] items-center justify-center rounded-full',
        'bg-transparent text-ink transition-all duration-[400ms]',
        'after:absolute after:inset-0 after:z-[-1] after:block after:rounded-full after:bg-white',
        'after:transition-all after:duration-[400ms]',
        'hover:after:scale-125 hover:after:opacity-60 motion-reduce:after:transition-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        className,
      )}
    >
      <Play aria-hidden="true" className="size-[20px] fill-current" />
    </button>
  )
}
