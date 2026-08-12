import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

/* Newsletter — the solid orange #ff5e15 "Subscribe To Newsletter" band:
   heading + supporting paragraph on the left, white-bordered input with a
   black "Subscribe" button on the right. Presentational — a successful
   subscribe replaces the form with a confirmation status. */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  if (subscribed) {
    return (
      <section aria-label="Subscribe To Newsletter" className="bg-brand py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
          <h3 className="font-heading text-3xl font-light uppercase text-white">
            Subscribe To Newsletter
          </h3>
          <p role="status" className="text-lg text-white">
            You have been subscribed — welcome aboard!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section aria-label="Subscribe To Newsletter" className="bg-brand py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 lg:flex-row">
        <div>
          <h3 className="font-heading text-3xl font-light uppercase text-white">
            Subscribe To Newsletter
          </h3>
          <p className="mt-2 max-w-xl text-white/90">
            Get the latest construction insights and project news in your inbox.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="min-w-0 flex-1 border-2 border-white bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/70"
          />
          <Button
            type="submit"
            className="rounded-none bg-black px-6 font-heading text-base uppercase tracking-wide text-white hover:opacity-80"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
