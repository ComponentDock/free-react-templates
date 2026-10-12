import { TriangleAlert } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface FieldErrorProps {
  /** Ties the bubble to the field it describes. */
  id?: string
  /** The field's own required-message line. */
  message: string
  className?: string
}

/**
 * The frameless error bubble: a square white box outlined in the shared error
 * red, sitting inside the right edge of the well with a warning glyph beside
 * it. Hidden until an invalid submit, then revealed on hover and always shown
 * on narrow screens.
 */
export function FieldError({ id, message, className }: FieldErrorProps) {
  return (
    <>
      <span
        id={id}
        role="alert"
        className={cn(
          'pointer-events-none invisible absolute top-1/2 right-[82px] max-w-[70%] -translate-y-1/2',
          'rounded-none border border-error bg-white py-[4px] pr-[25px] pl-[10px]',
          'text-left font-sans text-[14px] leading-[1.4] text-error opacity-0',
          'transition-opacity duration-[400ms]',
          'group-hover:visible group-hover:opacity-100 max-[992px]:visible max-[992px]:opacity-100',
          className,
        )}
      >
        {message}
      </span>

      <TriangleAlert
        aria-hidden="true"
        className="absolute top-1/2 right-[88px] size-[14px] -translate-y-1/2 text-error"
      />
    </>
  )
}
