import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StarsProps {
  readonly className?: string
  /** `primary` inside the reviews; `amber` in the licence strip and the hero. */
  readonly tone?: 'amber' | 'primary'
  /** The rating repeated beside the glyphs, so the stars are not colour-only. */
  readonly label: string
}

/** Five decorative stars, labelled as a single rating for assistive technology. */
export function Stars({ className, tone = 'amber', label }: StarsProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn('inline-flex items-center gap-0.5', className)}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            'h-4 w-4 fill-current',
            tone === 'primary' ? 'text-primary-400' : 'text-amber-400',
          )}
        />
      ))}
    </span>
  )
}
