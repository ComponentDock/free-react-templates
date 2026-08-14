import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/wavecast-subscribe/1600/900')",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-xl px-4 text-center">
        <h2 className="text-4xl font-black text-white">Subscribe</h2>
        <p className="mt-4 text-xl text-white">
          Join the newsletter to hear every new episode first.
        </p>
        {subscribed ? (
          <p role="status" className="mt-10 text-white">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              aria-label="Email address"
              aria-invalid={error ? true : undefined}
              className="h-20 flex-1 border border-white/30 bg-transparent px-6 text-[22px] italic text-white outline-none transition-colors placeholder:text-white/50 focus:border-primary-600"
            />
            <Button type="submit" className="h-20 rounded text-xs uppercase tracking-[0.2em]">
              Send
            </Button>
          </form>
        )}
        {error && (
          <p role="alert" className="mt-4 text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
