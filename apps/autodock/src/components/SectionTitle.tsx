import { Car } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface SectionTitleProps {
  title: string
  tone?: 'dark' | 'light'
  className?: string
}

/** Centered section heading with the golden car-icon accent line. */
export function SectionTitle({ title, tone = 'dark', className }: SectionTitleProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      <h2
        className={cn('text-3xl font-bold uppercase', tone === 'dark' ? 'text-ink' : 'text-white')}
      >
        {title}
      </h2>
      <div className="mt-3 flex items-center justify-center gap-3" aria-hidden="true">
        <span className={cn('h-px w-12', tone === 'dark' ? 'bg-ink/60' : 'bg-white/60')} />
        <Car className="h-6 w-6 text-brand" />
        <span className={cn('h-px w-12', tone === 'dark' ? 'bg-ink/60' : 'bg-white/60')} />
      </div>
    </div>
  )
}
