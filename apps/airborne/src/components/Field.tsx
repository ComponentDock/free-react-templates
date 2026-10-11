import { AlertCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface FieldProps {
  id: string
  name: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  onFocus: () => void
  className?: string
}

/**
 * One centred grey pill inside a 50px well. Focusing the field plays the
 * design's green bloom; when the field carries an error it also reveals the
 * white bubble — hidden until an invalid submit, then shown while hovered and
 * always on narrow screens — with a red warning glyph.
 */
export function Field({ id, name, label, value, error, onChange, onFocus, className }: FieldProps) {
  return (
    <div className={cn('group relative z-[1] h-[50px] w-full', className)}>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type="text"
        autoComplete="off"
        placeholder={label}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        onFocus={onFocus}
        className={cn(
          'peer block h-full w-full rounded-pill bg-field px-[20px] text-center',
          'font-heading text-[15px] leading-[1.2] font-bold text-field-text',
          'placeholder:text-placeholder',
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 -z-10 rounded-bloom',
          'shadow-[0_0_0_0_var(--color-bloom)]',
          'peer-focus:animate-bloom',
        )}
      />

      {error ? (
        <>
          <span
            id={`${id}-error`}
            role="alert"
            className={cn(
              'pointer-events-none invisible absolute top-1/2 right-[12px] max-w-[70%] -translate-y-1/2',
              'rounded-bubble border border-error bg-card pt-[5px] pr-[30px] pb-[6px] pl-[10px]',
              'text-left font-heading text-[12px] leading-[1.4] font-bold text-error opacity-0',
              'transition-opacity duration-[400ms]',
              'group-hover:visible group-hover:opacity-100 max-[992px]:visible max-[992px]:opacity-100',
            )}
          >
            {error}
          </span>

          <AlertCircle
            aria-hidden="true"
            className="absolute top-1/2 right-[18px] size-[16px] -translate-y-1/2 text-error"
          />
        </>
      ) : null}
    </div>
  )
}
