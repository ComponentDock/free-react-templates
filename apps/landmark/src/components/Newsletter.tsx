import { useState } from 'react'
import { NEWSLETTER_IMAGE } from '../data'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim() === '') {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-2">
        <div className="px-4 py-16 text-white">
          <h2 className="text-4xl font-medium">Subscribe Newsletter</h2>
          <p className="mt-4 max-w-md text-white/85">
            Get new property listings and market news delivered to your inbox every week.
          </p>

          {status === 'success' ? (
            <p role="status" className="mt-8 text-lg text-brand">
              Thank you for subscribing!
            </p>
          ) : (
            <form className="mt-8 max-w-md" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full border-b-2 border-line bg-transparent py-2.5 text-white placeholder:text-white/60 focus:border-brand focus:outline-none"
              />
              {status === 'error' && (
                <p role="alert" className="mt-3 text-sm text-white/90">
                  Please enter your email address.
                </p>
              )}
              <button
                type="submit"
                className="mt-6 rounded bg-brand px-8 py-2.5 text-lg text-white transition-colors hover:bg-brand/85"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        <div
          aria-hidden="true"
          className="hidden min-h-[414px] bg-cover bg-center lg:block"
          style={{ backgroundImage: `url('${NEWSLETTER_IMAGE}')` }}
        />
      </div>
    </section>
  )
}
