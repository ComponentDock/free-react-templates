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
 * One 500px translucent-bordered round field with a transparent fill, so the
 * wash shows through it. Focusing it reveals the blue outline that scales in
 * from slightly larger; when it carries an error it also reveals the rounded
 * white bubble — hidden until an invalid submit, then shown while hovered and
 * always on narrow screens — with a red warning triangle.
 */
export function Field({ id, name, label, value, error, onChange, onFocus, className }: FieldProps) {
  return (
    <div
      className={cn(
        'group relative mx-[5px] mt-[20px] h-[50px] w-[500px] max-w-[calc(100%_-_10px)]',
        'rounded-[25px] border-2 border-field-border bg-transparent',
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
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        onFocus={onFocus}
        className={cn(
          'peer block h-full w-full rounded-[25px] bg-transparent px-[38px]',
          'font-sans text-[15px] leading-[1.2] text-white',
          'placeholder:text-white',
        )}
      />

      <span
        aria-hidden="true"
        data-testid="focus-ring"
        className={cn(
          'pointer-events-none absolute top-[-2px] left-[-2px]',
          'h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]',
          'invisible rounded-[25px] border-2 border-brand opacity-0',
          'scale-x-[1.1] scale-y-[1.2] transition-all duration-[400ms]',
          'peer-focus:visible peer-focus:scale-100 peer-focus:opacity-100',
        )}
      />

      {error ? (
        <>
          <span
            id={`${id}-error`}
            role="alert"
            className={cn(
              'pointer-events-none invisible absolute top-1/2 right-[12px] max-w-[70%] -translate-y-1/2',
              'rounded-[15px] border border-error bg-white py-[4px] pr-[25px] pl-[10px]',
              'text-left font-sans text-[14px] leading-[1.4] text-error opacity-0',
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
