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
 * The bare underline field: no box, no radius, no top or side border — only a
 * hairline rule under the text, a transparent ground that picks up a faint white
 * wash on focus, and a 40px right inset reserved for the arrow lane so the
 * placeholder never collides with the arrow. The design's own field is a plain
 * text input checked as an address; the recreation uses a real e-mail field.
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
        'block h-full w-full rounded-none pt-0 pr-[40px] pb-0 pl-[3px]',
        'border-b border-b-white/10 bg-transparent',
        'font-sans text-[15px] leading-[1.2] font-normal text-white placeholder:text-placeholder',
        'transition-all duration-[400ms] focus:bg-white/5 focus:outline-none',
        className,
      )}
    />
  )
}
