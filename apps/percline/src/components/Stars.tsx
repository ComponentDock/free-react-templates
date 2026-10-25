import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface StarsProps {
  readonly className?: string
  readonly size?: 'sm' | 'lg'
}

/** Five decorative stars; every band repeats the rating in text beside them. */
export function Stars({ className, size = 'sm' }: StarsProps) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          className={cn(
            'fill-current',
            size === 'lg' ? 'h-5 w-5 text-primary-400' : 'h-4 w-4 text-amber-400',
          )}
        />
      ))}
    </span>
  )
}
