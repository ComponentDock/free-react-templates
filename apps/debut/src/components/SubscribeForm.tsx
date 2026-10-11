import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { fieldErrors, subscribeSchema, type SubscribeValues } from '../lib/forms'

type FieldName = keyof SubscribeValues
type Errors = Partial<Record<FieldName, string>>

export interface SubscribeFormProps {
  className?: string
}

function ValidationBubble({ id, message }: { id: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      className={cn(
        'mb-[6px] inline-flex items-center gap-[6px] rounded-[2px] border border-error bg-white',
        'px-[8px] py-[2px] font-heading text-[14px] leading-[1.5] text-error',
      )}
    >
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  )
}

export function SubscribeForm({ className }: SubscribeFormProps) {
  const [values, setValues] = useState<SubscribeValues>({ name: '', email: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [subscribed, setSubscribed] = useState(false)

  const change = (field: FieldName) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const clear = (field: FieldName) => () => {
    setErrors((current) => ({ ...current, [field]: undefined }))
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

  const fieldClass = cn(
    'peer h-[50px] w-full rounded-field border-2 border-line bg-white px-[22px]',
    'font-lato text-[15px] leading-[1.5] text-ink outline-none placeholder:text-muted',
  )
  const ringClass = cn(
    'pointer-events-none absolute -top-[2px] -left-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)]',
    'scale-[1.1] rounded-field border-2 border-brand opacity-0',
    'transition-all duration-[400ms] peer-focus:scale-100 peer-focus:opacity-100',
  )

  return (
    <form className={cn('w-full', className)} noValidate onSubmit={submit}>
      <div className="relative mb-[10px]">
        {errors.name ? <ValidationBubble id="debut-name-error" message={errors.name} /> : null}
        <input
          id="debut-name"
          name="name"
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? 'debut-name-error' : undefined}
          value={values.name}
          onChange={change('name')}
          onFocus={clear('name')}
          className={fieldClass}
        />
        <span aria-hidden="true" className={ringClass} />
      </div>

      <div className="relative mb-[20px]">
        {errors.email ? <ValidationBubble id="debut-email-error" message={errors.email} /> : null}
        <input
          id="debut-email"
          name="email"
          type="text"
          placeholder="Email Address"
          aria-label="Email Address"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? 'debut-email-error' : undefined}
          value={values.email}
          onChange={change('email')}
          onFocus={clear('email')}
          className={fieldClass}
        />
        <span aria-hidden="true" className={ringClass} />
      </div>

      <Button
        type="submit"
        className={cn(
          'h-[50px] w-full rounded-field bg-brand font-lato text-[15px] font-bold text-white',
          'transition-all duration-[400ms] hover:bg-brand-hover',
        )}
      >
        Subscribe
      </Button>

      {subscribed ? (
        <p role="status" className="pt-[18px] font-lato text-[14px] leading-[1.5] text-brand">
          Thanks! We&rsquo;ll let you know the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
