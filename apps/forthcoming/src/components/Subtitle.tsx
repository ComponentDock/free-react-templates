import { cn } from '@free-react-templates/ui'

export interface SubtitleProps {
  className?: string
}

/**
 * ONE centred line of serif copy at 25px — the only Playfair roman type on the
 * screen — with 67px below it, separating the headline from the clock. Kept to
 * a single line, as the design has it.
 */
export function Subtitle({ className }: SubtitleProps) {
  return (
    <p
      className={cn(
        'pb-[67px] text-center font-serif text-[25px] leading-[1.2] text-white',
        className,
      )}
    >
      Leave your e-mail and we&apos;ll tell you the moment we launch.
    </p>
  )
}
