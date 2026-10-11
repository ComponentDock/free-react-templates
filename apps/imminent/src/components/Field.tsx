import { AlertTriangle } from 'lucide-react'
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
 * One 490px square-cornered white field. Focusing it plays the design's green
 * bloom behind it; when it carries an error it also reveals the square white
 * bubble — hidden until an invalid submit, then shown while hovered and always
 * on narrow screens — with a red warning triangle.
 */
export function Field({ id, name, label, value, error, onChange, onFocus, className }: FieldProps) {
  return (
    <div className={cn('group relative z-[1] mb-[20px] h-[50px] w-[490px] max-w-full', className)}>
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
          'peer block h-full w-full bg-white px-[25px]',
          'font-sans text-[16px] leading-[1.333333] text-field-text',
          'placeholder:text-placeholder',
        )}
      />

      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 -z-10',
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
              'border border-error bg-white pt-[5px] pr-[30px] pb-[6px] pl-[10px]',
              'text-left font-sans text-[15px] leading-[1.4] text-error opacity-0',
              'transition-opacity duration-[400ms]',
              'group-hover:visible group-hover:opacity-100 max-[992px]:visible max-[992px]:opacity-100',
            )}
          >
            {error}
          </span>

          <AlertTriangle
            aria-hidden="true"
            className="absolute top-1/2 right-[18px] size-[16px] -translate-y-1/2 text-error"
          />
        </>
      ) : null}
    </div>
  )
}
