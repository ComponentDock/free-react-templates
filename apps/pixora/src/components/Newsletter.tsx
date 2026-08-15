import { useState, type FormEvent } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-gradient-to-br from-brand-light to-brand py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-extralight uppercase text-white">
            <span className="font-semibold">Subscribe</span> for our Newsletter
          </h2>
          <p role="status" className="mt-6 text-base font-light text-white">
            Thanks! You&rsquo;re on the list — we&rsquo;ll be in touch soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-brand-light to-brand py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-extralight uppercase leading-[1.25em] text-white">
          <span className="font-semibold">Subscribe</span>
          <br />
          for our Newsletter
        </h2>
        <p className="mt-4 text-sm font-light text-white">We won&rsquo;t send any kind of spam</p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-[50px] flex-1 rounded-full bg-[#f9f9ff] px-6 text-sm font-light text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-white/70"
          />
          <button
            type="submit"
            className="inline-flex h-[50px] items-center justify-center rounded-full border border-white bg-transparent px-8 text-sm font-medium text-ink transition-colors hover:bg-gradient-to-br hover:from-brand-light hover:to-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  )
}
