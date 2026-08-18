import { useState } from 'react'
import { Mail } from 'lucide-react'

export function Subscribe() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <section aria-label="Newsletter" className="border-y border-hairline bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        {subscribed ? (
          <p role="status" className="font-display text-2xl font-bold text-brand">
            You&apos;re subscribed! Check your inbox for the latest job openings.
          </p>
        ) : (
          <>
            <h3 className="font-display text-3xl font-bold leading-tight text-ink sm:text-[46px]">
              Subscribe our newsletter to get updates about latest jobs
            </h3>
            <p className="mt-4 text-body">
              Get the latest job openings delivered straight to your inbox, every week.
            </p>
            <form onSubmit={handleSubmit} className="relative mx-auto mt-10 max-w-xl">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-hairline bg-white py-4 pl-6 pr-44 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-brand"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-[5px] bg-brand px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-brand-hover"
              >
                <Mail aria-hidden="true" className="size-5" />
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}
