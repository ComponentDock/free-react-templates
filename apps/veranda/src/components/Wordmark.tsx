import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  /** Light treatment for the dark footer ground. */
  light?: boolean
  className?: string
}

/**
 * The house mark: three speech marks that overlap like a porch rail, drawn as
 * two rounded bubbles in the brand indigo and the rose counter-colour. Drawn
 * inline so no image request is made for the header.
 */
export function Wordmark({ light = false, className }: WordmarkProps) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 44 32" aria-hidden="true" className="h-8 w-11 flex-none">
        <path d="M2 3h15a6 6 0 0 1 0 12H9l-7 6V3Z" fill="#4f46e5" className="opacity-90" />
        <path d="M15 11h15a6 6 0 0 1 0 12h-8l-7 6V11Z" fill="#f43f5e" className="opacity-90" />
        <path d="M28 19h4a6 6 0 0 1 0 6h-4v-6Z" fill="#a5b4fc" />
      </svg>
      <span
        className={cn('text-lg font-bold tracking-tight', light ? 'text-white' : 'text-gray-900')}
      >
        Veranda
      </span>
    </span>
  )
}
