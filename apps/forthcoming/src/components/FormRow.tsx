import { useCallback, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { Field } from './Field'
import { NotifyButton } from './NotifyButton'
import { fieldErrors, notifySchema } from '../lib/forms'

export interface FormRowProps {
  className?: string
}

/**
 * The one-row notify form: a 500px round e-mail field beside the blue pill
 * button, both carrying the same 5px side margins so a single 10px gap
 * separates them, with 70px of padding above the row. Submitting checks the
 * field against the design's own pattern, reveals its bubble on a miss and
 * never navigates; a valid submit is acknowledged in place, since the design
 * itself has no success screen.
 */
export function FormRow({ className }: FormRowProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [notified, setNotified] = useState(false)

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const result = notifySchema.safeParse({ email })

      if (!result.success) {
        setError(fieldErrors(result.error).email)
        setNotified(false)
        return
      }

      setError(undefined)
      setNotified(true)
    },
    [email],
  )

  return (
    <form
      data-testid="notify-form"
      className={cn('flex w-full flex-wrap justify-center pt-[70px]', className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <Field
        id="forthcoming-email"
        name="email"
        label="Email Address"
        value={email}
        error={error}
        onChange={setEmail}
        onFocus={() => {
          setError(undefined)
        }}
      />

      <NotifyButton />

      {notified ? (
        <p
          role="status"
          className="w-full pt-[20px] text-center font-sans text-[15px] leading-[1.2] text-white"
        >
          Thanks — you&apos;re on the list. We&apos;ll be in touch the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
