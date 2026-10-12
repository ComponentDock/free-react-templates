import { TriangleAlert } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface ValidationBubbleProps {
  /** Ties the bubble to the field it describes. */
  id?: string
  /** The field's own requirement line. */
  message: string
  className?: string
}

/**
 * The square white error bubble: a hairline red outline, flat corners and red
 * text, vertically centred on the field and pinned 32px from the right edge,
 * with a 14px red warning glyph 38px from the edge beside it. It fades in over
 * 400 ms, is revealed while the field is hovered on wide screens and is always
 * readable on narrow ones, and never intercepts the pointer.
 */
export function ValidationBubble({ id, message, className }: ValidationBubbleProps) {
  return (
    <>
      <span
        id={id}
        role="alert"
        className={cn(
          'pointer-events-none invisible absolute top-1/2 right-[32px] max-w-[70%] -translate-y-1/2',
          'rounded-none border border-error bg-white py-[4px] pr-[25px] pl-[10px]',
          'text-left font-sans text-[14px] leading-[1.4] font-normal text-error opacity-0',
          'transition-opacity duration-[400ms]',
          'group-hover/well:visible group-hover/well:opacity-100',
          'max-[992px]:visible max-[992px]:opacity-100',
          className,
        )}
      >
        {message}
      </span>

      <TriangleAlert
        aria-hidden="true"
        className="absolute top-1/2 right-[38px] size-[14px] -translate-y-1/2 text-error"
      />
    </>
  )
}
