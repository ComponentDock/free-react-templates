import { useCallback, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { Field } from './Field'
import { SubscribeButton } from './SubscribeButton'
import { fieldErrors, newsletterSchema, type NewsletterField } from '../lib/forms'

export interface NewsletterFormProps {
  className?: string
}

/**
 * The card's form: a Name well, an Email well and the green submit pill.
 * Submitting checks both fields (the e-mail against the design's own pattern),
 * reveals a bubble per offending field and never navigates; a valid submit is
 * acknowledged in place, since the design itself has no success screen.
 */
export function NewsletterForm({ className }: NewsletterFormProps) {
  const [values, setValues] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState<Partial<Record<NewsletterField, string>>>({})
  const [subscribed, setSubscribed] = useState(false)

  const setField = useCallback((field: NewsletterField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }, [])

  const clearField = useCallback((field: NewsletterField) => {
    setErrors((current) => ({ ...current, [field]: undefined }))
  }, [])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const result = newsletterSchema.safeParse(values)

      if (!result.success) {
        setErrors(fieldErrors(result.error))
        setSubscribed(false)
        return
      }

      setErrors({})
      setSubscribed(true)
    },
    [values],
  )

  return (
    <form className={cn('w-full', className)} onSubmit={handleSubmit} noValidate>
      <Field
        id="airborne-name"
        name="name"
        label="Name"
        value={values.name}
        error={errors.name}
        onChange={(value) => {
          setField('name', value)
        }}
        onFocus={() => {
          clearField('name')
        }}
        className="mb-[10px]"
      />

      <Field
        id="airborne-email"
        name="email"
        label="Email"
        value={values.email}
        error={errors.email}
        onChange={(value) => {
          setField('email', value)
        }}
        onFocus={() => {
          clearField('email')
        }}
        className="mb-[20px]"
      />

      <SubscribeButton />

      {subscribed ? (
        <p
          role="status"
          className="pt-[10px] text-center font-sans text-[13px] leading-[1.5] text-brand"
        >
          Thanks — we&apos;ll let you know the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
