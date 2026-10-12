import { useCallback, useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { emailError } from '../lib/validation'
import { FieldError } from './FieldError'
import { SubmitButton } from './SubmitButton'

export interface EmailFormProps {
  className?: string
}

const EMAIL_ID = 'impending-email'

/**
 * The signup row: a 500×60 translucent well with an 80px paper-plane submit
 * lane flush against its right edge. Submitting checks the field against the
 * design's own e-mail shape; a miss is prevented and reveals the bubble, while
 * an accepted value is left to submit natively and is acknowledged in place.
 */
export function EmailForm({ className }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const message = emailError(email)

      if (message) {
        event.preventDefault()
        setError(message)
        setSubmitted(false)
        return
      }

      setError(null)
      setSubmitted(true)
    },
    [email],
  )

  return (
    <form
      data-testid="email-form"
      className={cn('w-full pt-[55px]', className)}
      onSubmit={handleSubmit}
      noValidate
    >
      <div
        data-testid="email-well"
        className={cn(
          'group relative h-[60px] w-[500px] max-w-full bg-white/10 pr-[80px]',
          'max-[992px]:mx-auto',
        )}
      >
        <label className="sr-only" htmlFor={EMAIL_ID}>
          Your email address
        </label>

        <input
          id={EMAIL_ID}
          name="email"
          type="text"
          autoComplete="off"
          placeholder="Your email address"
          value={email}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${EMAIL_ID}-error` : undefined}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          onFocus={() => {
            setError(null)
          }}
          className={cn(
            'block h-full w-full bg-transparent pr-[15px] pl-[25px]',
            'font-sans text-[15px] leading-[1.2] text-white placeholder:text-white',
            'transition-all duration-[400ms] focus:bg-white/[0.12] focus:outline-none',
          )}
        />

        <SubmitButton />

        {error ? <FieldError id={`${EMAIL_ID}-error`} message={error} /> : null}
      </div>

      {submitted ? (
        <p role="status" className="pt-[15px] font-sans text-[13px] leading-[1.5] text-white">
          Thanks — we&apos;ll let you know the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
