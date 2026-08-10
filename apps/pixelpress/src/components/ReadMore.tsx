import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface ReadMoreProps {
  label?: string
  href?: string
  /** Dark variant (ink text) for light panels, default white for dark sections. */
  dark?: boolean
}

/** Italic bold "Read More" link with arrow — white on dark, ink on white. */
export function ReadMore({ label = 'Read More', href = '#', dark = false }: ReadMoreProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-2 text-[15px] font-bold italic transition-colors hover:text-magenta-bright',
        dark ? 'text-ink' : 'text-white',
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}
