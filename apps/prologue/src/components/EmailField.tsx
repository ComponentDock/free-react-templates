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
 * The brand-coloured field: a flat, square, borderless slab of the accent
 * colour with only a soft shadow, which deepens on focus — nothing else about
 * it changes. Its left inset clears the label tab and its right inset clears
 * the arrow lane; both tighten on the narrowest screens. The design's own field
 * is a bare text input validated as an address; the recreation uses a real
 * e-mail field.
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
      placeholder="Add your email"
      value={value}
      aria-invalid={hasError ? true : undefined}
      aria-describedby={hasError ? errorId : undefined}
      onChange={(event) => {
        onChange(event.target.value)
      }}
      onFocus={onFocus}
      className={cn(
        'block h-full w-full rounded-none border-0 bg-accent pt-0 pr-[80px] pb-0 pl-[172px]',
        'font-sans text-[15px] leading-[1.2] font-medium text-ink placeholder:text-placeholder',
        'shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] transition-all duration-[400ms]',
        'focus:shadow-[0_10px_15px_0_rgba(0,0,0,0.2)] focus:outline-none',
        'max-[576px]:pr-[60px] max-[576px]:pl-[25px]',
        className,
      )}
    />
  )
}
