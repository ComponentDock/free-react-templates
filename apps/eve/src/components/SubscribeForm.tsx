import { useState, type ChangeEvent, type FormEvent, type RefObject } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { fieldErrors, subscribeSchema, type SubscribeField } from '../lib/forms'

interface FieldConfig {
  field: SubscribeField
  label: string
  marginClass: string
}

const FIELDS: FieldConfig[] = [
  { field: 'name', label: 'Name', marginClass: 'mb-[10px]' },
  { field: 'email', label: 'Email', marginClass: 'mb-[20px]' },
]

export interface SubscribeFormProps {
  className?: string
  /** Receives the first (name) field, so the dialog can focus it on open. */
  firstFieldRef?: RefObject<HTMLInputElement | null>
}

/**
 * Two pill fields over a full-width action pill. An invalid submit raises the
 * design's warning bubble on each offending field — hidden until then, revealed
 * while that field is hovered and always visible on narrow screens — and
 * focusing a field clears its message and reveals the blue focus ring.
 */
export function SubscribeForm({ className, firstFieldRef }: SubscribeFormProps) {
  const [values, setValues] = useState<Record<SubscribeField, string>>({ name: '', email: '' })
  const [errors, setErrors] = useState<Partial<Record<SubscribeField, string>>>({})
  const [focused, setFocused] = useState<SubscribeField | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const change = (field: SubscribeField) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValues((current) => ({ ...current, [field]: value }))
  }

  const focus = (field: SubscribeField) => () => {
    setFocused(field)
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const blur = () => {
    setFocused(null)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse(values)

    if (!result.success) {
      setErrors(fieldErrors(result.error))
      setSubscribed(false)
      return
    }

    setErrors({})
    setSubscribed(true)
  }

  return (
    <div className={cn('mx-auto max-w-[390px]', className)}>
      <h2
        id="eve-subscribe-title"
        className="pb-[36px] text-center font-heading text-[24px] leading-[1.2] font-black text-ink uppercase"
      >
        <span className="border-b-[3px] border-action pb-[6px]">Subscribe</span>
      </h2>

      <p className="pb-[40px] text-center font-heading text-[18px] leading-[1.4] text-sub uppercase">
        Follow our launch updates
      </p>

      <form className="w-full" noValidate onSubmit={submit}>
        {FIELDS.map(({ field, label, marginClass }, index) => (
          <div
            key={field}
            className={cn(
              'group relative h-[50px] w-full rounded-pill border-2 border-well bg-white',
              marginClass,
            )}
          >
            <label className="sr-only" htmlFor={`eve-${field}`}>
              {label}
            </label>

            <input
              id={`eve-${field}`}
              name={field}
              type="text"
              placeholder={label}
              ref={index === 0 ? firstFieldRef : undefined}
              value={values[field]}
              aria-invalid={errors[field] ? true : undefined}
              aria-describedby={errors[field] ? `eve-${field}-error` : undefined}
              onChange={change(field)}
              onFocus={focus(field)}
              onBlur={blur}
              className={cn(
                'block size-full rounded-pill bg-transparent px-[30px]',
                'font-heading text-[15px] leading-[1.2] font-bold text-sub outline-none',
                'placeholder:text-muted',
              )}
            />

            <span
              aria-hidden="true"
              className={cn(
                'pointer-events-none absolute -inset-[2px] rounded-pill border-2 border-action',
                'transition-all duration-[400ms]',
                focused === field
                  ? 'visible scale-100 opacity-100'
                  : 'invisible scale-x-110 scale-y-120 opacity-0',
              )}
            />

            {errors[field] ? (
              <p
                id={`eve-${field}-error`}
                role="alert"
                className={cn(
                  'pointer-events-none absolute top-1/2 right-[12px] inline-flex max-w-[70%]',
                  '-translate-y-1/2 items-center gap-[8px] rounded-bubble border border-error bg-white',
                  'py-[4px] pr-[25px] pl-[10px] font-heading text-[13px] leading-[1.4] text-error',
                  'invisible opacity-0 transition-opacity duration-[400ms]',
                  'group-hover:visible group-hover:opacity-100',
                  'max-[992px]:visible max-[992px]:opacity-100',
                )}
              >
                <AlertCircle className="size-[18px] shrink-0" aria-hidden="true" />
                {errors[field]}
              </p>
            ) : null}
          </div>
        ))}

        <Button
          type="submit"
          className={cn(
            'flex h-[50px] w-full items-center justify-center rounded-pill bg-action px-5',
            'font-heading text-[15px] leading-[1.2] font-bold text-white',
            'transition-colors duration-[400ms] hover:bg-ink',
          )}
        >
          Get Updates
        </Button>
      </form>

      <p
        className={cn(
          'mx-auto max-w-[285px] pt-[20px] text-center',
          'font-heading text-[12px] leading-[1.6666667] text-muted',
        )}
      >
        No spam, ever. You can unsubscribe at any time.
      </p>

      {subscribed ? (
        <p
          role="status"
          className="pt-[10px] text-center font-heading text-[15px] leading-[1.2] text-action"
        >
          Thanks! We&rsquo;ll email you when we launch.
        </p>
      ) : null}
    </div>
  )
}
