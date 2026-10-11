import { useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { firstError, subscribeSchema } from '../lib/forms'

export interface SubscribeFormProps {
  className?: string
}

/**
 * One white pill field beside a purple pill button. An invalid submit raises the
 * design's warning bubble (shown on hover, and always on narrow screens);
 * focusing the field clears the message and replays the purple focus glow.
 */
export function SubscribeForm({ className }: SubscribeFormProps) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [glow, setGlow] = useState(0)
  const [subscribed, setSubscribed] = useState(false)

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const focus = () => {
    setGlow((current) => current + 1)
    setError(null)
  }

  const blur = () => {
    setGlow(0)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })

    if (!result.success) {
      setError(firstError(result.error))
      setSubscribed(false)
      return
    }

    setError(null)
    setSubscribed(true)
  }

  return (
    <form
      className={cn('flex w-full flex-wrap items-center justify-center', className)}
      noValidate
      onSubmit={submit}
    >
      <div className="group relative z-[1] mx-[5px] mb-[20px] w-[500px] max-w-[calc(100%_-_10px)]">
        <label className="sr-only" htmlFor="premiere-email">
          Email Address
        </label>
        <input
          id="premiere-email"
          name="email"
          type="text"
          placeholder="Enter Email Address"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'premiere-email-error' : undefined}
          value={email}
          onChange={change}
          onFocus={focus}
          onBlur={blur}
          className={cn(
            'block h-[70px] w-full rounded-pill bg-white px-10',
            'font-lato text-[15px] leading-[1.4] font-bold text-brand outline-none',
          )}
        />

        {glow > 0 ? (
          <span
            key={glow}
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute bottom-0 left-0 -z-[1] size-full rounded-pill"
          />
        ) : null}

        {error ? (
          <p
            id="premiere-email-error"
            role="alert"
            className={cn(
              'pointer-events-none absolute top-1/2 right-[12px] inline-flex max-w-[70%] -translate-y-1/2',
              'items-center gap-[6px] rounded-bubble border border-error bg-white py-[5px] pr-[30px] pl-[10px]',
              'font-lato text-[15px] leading-[1.4] font-bold text-error',
              'opacity-0 transition-opacity duration-[400ms]',
              'group-hover:opacity-100 max-[992px]:opacity-100',
            )}
          >
            <AlertCircle className="size-[20px] shrink-0" aria-hidden="true" />
            {error}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        className={cn(
          'mx-[5px] mb-[20px] inline-flex h-[70px] min-w-[160px] items-center justify-center',
          'rounded-pill bg-brand px-5 font-lato text-[15px] leading-[1.4] font-bold text-white uppercase',
          'transition-all duration-[400ms] hover:bg-brand-hover',
        )}
      >
        Subscribe
      </Button>

      {subscribed ? (
        <p
          role="status"
          className="w-full pt-[16px] text-center font-lato text-[14px] leading-[1.5] text-white"
        >
          Thanks! We&rsquo;ll email you the moment we launch.
        </p>
      ) : null}
    </form>
  )
}
