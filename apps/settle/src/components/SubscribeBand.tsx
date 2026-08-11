import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import {
  SUBSCRIBE_BUTTON,
  SUBSCRIBE_EYEBROW,
  SUBSCRIBE_PLACEHOLDER,
  SUBSCRIBE_SUCCESS,
  SUBSCRIBE_TITLE,
} from '../data'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* subscribe_area — background image band with overlay, h5 eyebrow + h2
   headline + inline email input + "Subscribe Now" button; success state
   after a valid submit. */
export function SubscribeBand() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/settle-subscribe/1920/600')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-[15px] font-medium tracking-[0.2em] text-white uppercase">
          {SUBSCRIBE_EYEBROW}
        </h2>
        <h3 className="mt-3 text-[26px] leading-snug font-bold text-white lg:text-[30px]">
          {SUBSCRIBE_TITLE}
        </h3>

        {subscribed ? (
          <p role="status" className="mt-8 text-[15px] font-medium text-white">
            {SUBSCRIBE_SUCCESS}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-8 flex max-w-[540px] flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="subscribe-email" className="sr-only">
              Email address
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={SUBSCRIBE_PLACEHOLDER}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'subscribe-error' : undefined}
              className="w-full flex-1 rounded-[5px] border border-white/40 bg-white px-4 py-3 text-[14px] text-ink placeholder:text-body focus:border-white focus:outline-none"
            />
            <Button
              type="submit"
              className="rounded-[5px] border border-white bg-white px-6 py-3 text-[14px] font-medium tracking-[0.1em] text-brand uppercase hover:bg-white/90"
            >
              {SUBSCRIBE_BUTTON}
            </Button>
          </form>
        )}
        {error && (
          <p id="subscribe-error" role="alert" className="mt-3 text-[13px] font-medium text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
