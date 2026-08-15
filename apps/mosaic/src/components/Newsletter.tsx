import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'

/* Newsletter — parallax-style band on the same brand gradient as the
   hero, with a centered heading, blurb and an email input plus a
   paper-plane icon submit button. Submitting swaps the form for a
   success confirmation (no backend). */
export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="subscribe"
      aria-label="Subscribe"
      className="bg-[linear-gradient(45deg,#ee76ad_0%,#efac78_100%)] py-24"
    >
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Subscribe to our Newsletter
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/90">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        {submitted ? (
          <p role="status" className="mt-10 text-lg font-semibold text-white">
            You're subscribed! Check your inbox for a welcome email.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full bg-white p-2"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter email address"
              className="w-full bg-transparent px-4 text-sm text-ink outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-azure text-white transition-colors hover:bg-[#1f9fd0]"
            >
              <Send className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
