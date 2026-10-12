import { cn } from '@free-react-templates/ui'

export interface BrandMarkProps {
  className?: string
}

/**
 * The brand mark: the app's own small near-black glyph — a rising semicircle on
 * a horizon line, drawn as an inline SVG so no image asset ships anywhere in
 * this template — pinned at the panel's top-left.
 */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <div data-testid="brand-mark" className={cn('block max-w-full', className)}>
      <a
        href="#"
        aria-label="Looming"
        className="inline-block text-mark transition-opacity duration-[400ms] hover:opacity-70"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 51 44"
          fill="currentColor"
          className="block h-[44px] w-[51px]"
        >
          <path d="M4 32a21.5 21.5 0 0 1 43 0z" />
          <path d="M0 36h51v5H0z" />
        </svg>
      </a>
    </div>
  )
}
