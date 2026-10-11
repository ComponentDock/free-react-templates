import { cn } from '@free-react-templates/ui'

interface WordmarkProps {
  className?: string
}

/**
 * Harbor logo: a stacked-layer mark (the design's layered server stack) beside
 * the uppercase wordmark. Rendering is always light type — the mark only
 * appears on the navy bands.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
        <ellipse cx="16" cy="7" rx="11" ry="4.5" fill="#8f97ee" />
        <path d="M5 7v7c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5V7" fill="#4c57d6" />
        <path d="M5 15v7c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-7" fill="#2f379c" />
      </svg>
      <span className="text-2xl font-bold uppercase tracking-widest text-white">Harbor</span>
    </span>
  )
}
