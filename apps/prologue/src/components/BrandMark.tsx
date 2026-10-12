import { cn } from '@free-react-templates/ui'

export interface BrandMarkProps {
  className?: string
}

/**
 * The brand mark: the app's own angular monogram — a corner rule with two bars,
 * drawn as an inline SVG so no image asset ships anywhere in this template —
 * pinned to the panel's top-left corner. It is a plain block wrapper (no growth
 * in the column) at most 43px tall, never wider than the panel.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div data-testid="brand-mark" className={cn('block max-w-full', className)}>
      <a
        href="#"
        aria-label="Prologue"
        className="inline-block text-ink transition-opacity duration-[400ms] hover:opacity-70 focus-visible:outline-none"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 35 43"
          fill="currentColor"
          className="block h-[43px] w-[35px]"
        >
          <path d="M0 0h35v6H6v31H0z" />
          <path d="M14 13h21v6H20v11h15v6H14z" />
        </svg>
      </a>
    </div>
  )
}
