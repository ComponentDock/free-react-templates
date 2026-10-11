import { useCallback, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { Field } from './Field'
import { SubmitButton } from './SubmitButton'
import { fieldErrors, getUpdatesSchema, type GetUpdatesField } from '../lib/forms'

export interface FormRowProps {
  className?: string
}

/**
 * The inline get-updates row: a Name pill, an Email pill and the dark submit
 * pill on one wrapping centred line. Submitting checks both fields (the e-mail
 * against the design's own pattern), reveals a bubble per offending field and
 * never navigates; a valid submit is acknowledged in place.
 */
export function FormRow({ className }: FormRowProps) {
  const [values, setValues] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState<Partial<Record<GetUpdatesField, string>>>({})
  const [subscribed, setSubscribed] = useState(false)

  const setField = useCallback((field: GetUpdatesField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
  }, [])

  const clearField = useCallback((field: GetUpdatesField) => {
    setErrors((current) => ({ ...current, [field]: undefined }))
  }, [])

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const result = getUpdatesSchema.safeParse(values)

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
    <div className={cn('w-full', className)}>
      <form
        className="flex w-full flex-wrap items-center justify-center"
        onSubmit={handleSubmit}
        noValidate
      >
        <Field
          id="advent-name"
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
        />

        <Field
          id="advent-email"
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
        />

        <SubmitButton />
      </form>

      {subscribed ? (
        <p
          role="status"
          className="pt-[10px] text-center font-sans text-[15px] leading-[1.5] text-white"
        >
          Thanks — we&apos;ll be in touch the moment we launch.
        </p>
      ) : null}
    </div>
  )
}
