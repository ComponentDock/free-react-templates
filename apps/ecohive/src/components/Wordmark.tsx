import { cn } from '@free-react-templates/ui'

interface WordmarkProps {
  className?: string
}

/**
 * Ecohive logo: a leaf mark (the design's leaf wordmark) beside the uppercase
 * wordmark. Rendering is always light type — the mark only appears on the plum
 * bands (header, hero, footer).
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 shrink-0">
        <path
          d="M27 5c-9.4 0-16 4.8-16 12.2 0 2.2.7 4 1.9 5.4C16.8 18 20.6 14.4 25.4 12c-4.2 3-7.4 6.9-9.2 12.4 1.3.5 2.8.6 4.3.3C25.6 23.4 28 17.6 28 9.6 28 8 27.7 6.4 27 5Z"
          fill="#f067ff"
        />
        <path
          d="M11.7 18.6C10.5 19.9 9.6 21.5 9 23.4c-1.4-1.5-2-3.4-2-5.6 0-2 .4-3.7 1.3-5.2l-2.6-3.3C3.9 11.5 3 14.4 3 17.8c0 3.6 1 6.4 3.1 8.4l-1.8 1.4 1.9 2.4 5-3.9c1.1.1 2.2 0 3.4-.3-.9-1.6-1.6-3.4-2.9-4.6Z"
          fill="#a5a7c5"
        />
      </svg>
      <span className="text-2xl font-bold tracking-wide text-white">Ecohive</span>
    </span>
  )
}
