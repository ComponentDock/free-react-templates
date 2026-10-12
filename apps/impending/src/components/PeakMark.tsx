import { cn } from '@free-react-templates/ui'

export interface PeakMarkProps {
  className?: string
}

/**
 * The brand mark: the app's own white two-peak glyph drawn as an inline SVG
 * (no image asset is used anywhere in this template), in a container that grows
 * so the call to action is pushed to the right edge.
 */
export function PeakMark({ className }: PeakMarkProps) {
  return (
    <div className={cn('my-[10px] mr-[30px] grow', className)}>
      <a
        href="#"
        aria-label="Impending"
        className="inline-block text-white transition-opacity duration-[400ms] hover:opacity-80"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 55 31"
          fill="currentColor"
          className="h-[31px] w-[55px]"
        >
          <path d="M0 31 L15 3 L30 31 Z" />
          <path d="M25 31 L40 8 L55 31 Z" />
        </svg>
      </a>
    </div>
  )
}
