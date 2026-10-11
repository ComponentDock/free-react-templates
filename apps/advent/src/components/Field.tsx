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
 * One white pill input. When the field carries an error it reveals the design's
 * bubble — white with a red hairline and a red warning glyph — hidden until an
 * invalid submit, then shown while hovered and always on narrow screens.
 */
export function Field({ id, name, label, value, error, onChange, onFocus, className }: FieldProps) {
  return (
    <div
      className={cn(
        'group relative mx-[10px] mb-[20px] h-[50px] w-[280px] max-w-[calc(100%_-_20px)] rounded-pill bg-white',
        className,
      )}
    >
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
        onChange={(event) => {
          onChange(event.target.value)
        }}
        onFocus={onFocus}
        className={cn(
          'block h-full w-full rounded-pill pl-[30px] pr-[20px]',
          'font-heading text-[15px] leading-[1.4] font-bold text-sub',
          'outline-none transition-all duration-[400ms] placeholder:text-muted',
          'focus:shadow-[0_0_10px_1px_rgba(255,255,255,0.5)]',
        )}
      />

      {error ? (
        <>
          <span
            role="alert"
            className={cn(
              'pointer-events-none invisible absolute top-1/2 right-[12px] max-w-[70%] -translate-y-1/2',
              'rounded-bubble border border-error bg-white py-[4px] pr-[25px] pl-[10px]',
              'text-left font-sans text-[13px] leading-[1.4] text-error opacity-0',
              'transition-opacity duration-[400ms]',
              'group-hover:visible group-hover:opacity-100 max-[992px]:visible max-[992px]:opacity-100',
            )}
          >
            {error}
          </span>

          <AlertTriangle
            aria-hidden="true"
            className="absolute top-1/2 right-[18px] size-[14px] -translate-y-1/2 text-error"
          />
        </>
      ) : null}
    </div>
  )
}
