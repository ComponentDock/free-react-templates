import { cn } from '@free-react-templates/ui'

export interface EmailFieldProps {
  /** Ties the visible label to the field. */
  id: string
  value: string
  /** True while the last submit was rejected, which raises the bubble. */
  hasError: boolean
  /** Id of the bubble that describes a rejected value. */
  errorId: string
  onChange: (value: string) => void
  onFocus: () => void
  className?: string
}

/**
 * The flat white e-mail slab: no border, no radius, only a soft shadow that
 * deepens on focus, with a 35px left inset and a 90px right inset reserved for
 * the submit lane. The design's own field is a bare text input validated as an
 * address; the recreation uses a real e-mail field.
 */
export function EmailField({
  id,
  value,
  hasError,
  errorId,
  onChange,
  onFocus,
  className,
}: EmailFieldProps) {
  return (
    <input
      id={id}
      name="email"
      type="email"
      inputMode="email"
      autoComplete="off"
      placeholder="Your email address"
      value={value}
      aria-invalid={hasError ? true : undefined}
      aria-describedby={hasError ? errorId : undefined}
      onChange={(event) => {
        onChange(event.target.value)
      }}
      onFocus={onFocus}
      className={cn(
        'block h-full w-full rounded-none border-0 bg-white pt-0 pr-[90px] pb-0 pl-[35px]',
        'font-sans text-[15px] leading-[1.2] font-medium text-ink placeholder:text-placeholder',
        'shadow-[0_10px_15px_rgba(0,0,0,0.1)] transition-all duration-[400ms]',
        'focus:shadow-[0_10px_15px_rgba(0,0,0,0.2)] focus:outline-none',
        className,
      )}
    />
  )
}
