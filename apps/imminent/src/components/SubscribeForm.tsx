import { useCallback, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { Field } from './Field'
import { SubscribeButton } from './SubscribeButton'
import { fieldErrors, subscribeSchema } from '../lib/forms'

export interface SubscribeFormProps {
  className?: string
}

/**
 * The one-row subscribe form: a 490px e-mail well flush against the green
 * button, both centred. Submitting checks the field against the design's own
 * pattern, reveals its bubble on a miss and never navigates; a valid submit is
 * acknowledged in place, since the design itself has no success screen.
 */
export function SubscribeForm({ className }: SubscribeFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const result = subscribeSchema.safeParse({ email })

      if (!result.success) {
        setError(fieldErrors(result.error).email)
        setSubscribed(false)
        return
      }

      setError(undefined)
      setSubscribed(true)
    },
    [email],
  )

  return (
    <form
      className={cn('flex w-full flex-wrap justify-center', className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <Field
        id="imminent-email"
        name="email"
        label="Email Address"
        value={email}
        error={error}
        onChange={setEmail}
        onFocus={() => {
          setError(undefined)
        }}
      />

      <SubscribeButton />

      {subscribed ? (
        <p
          role="status"
          className="w-full pt-[10px] text-center font-sans text-[13px] leading-[1.5] text-white"
        >
          Thanks — we&apos;ll let you know the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
