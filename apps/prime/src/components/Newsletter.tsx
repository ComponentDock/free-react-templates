import { useState, type FormEvent } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!emailPattern.test(email.trim())) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <section
      aria-label="Newsletter"
      className="bg-[linear-gradient(-45deg,#2f89fc_0%,#55fbc2_100%)] py-16"
    >
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-normal text-white">Subscribe to our Newsletter</h2>
        <p className="mb-8 text-white-80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        {subscribed ? (
          <p role="status" className="mx-auto max-w-md rounded bg-white/20 p-4 text-white">
            Thanks for subscribing — you will hear from us soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              placeholder="Enter email address"
              className="h-12 flex-1 border-0 bg-white px-4 text-base text-black focus:outline-none"
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
            />
            <button
              type="submit"
              className="h-12 bg-brand px-6 text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        )}
        {error && (
          <p role="alert" className="mt-3 text-sm font-semibold text-white">
            {error}
          </p>
        )}
      </div>
    </section>
  )
}
