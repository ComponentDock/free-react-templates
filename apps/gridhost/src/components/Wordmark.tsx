import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * The Gridhost wordmark: a four-square grid mark inside a thin ring beside the
 * name in the heading face. Sits on both navy surfaces (header and footer), so
 * the mark and label are white.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <a
      href="#home"
      aria-label="Gridhost, back to the top"
      className={cn(
        'inline-flex items-center gap-[10px] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-[35px] w-[35px] shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <circle cx="20" cy="20" r="17" />
        <path d="M12 12h7v7h-7zM21 12h7v7h-7zM12 21h7v7h-7z" />
        <path d="M25 24.5v5M22.5 27h5" strokeLinecap="round" />
      </svg>
      <span className="font-heading text-[28px] leading-none font-bold tracking-[0.02em]">
        Gridhost
      </span>
    </a>
  )
}
