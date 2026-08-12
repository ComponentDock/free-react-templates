import { useState, type FormEvent } from 'react'
import { SectionHeading } from './SectionHeading'

/**
 * Newsletter — "Our Newsletter" section with a name + email form (55px
 * inputs, 3px `#eaeaea` border, 10px radius, italic gray text) and a green
 * gradient Subscribe button; submitting shows a confirmation message.
 */
export function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section id="newsletter" className="mx-auto max-w-3xl px-4 pt-25 lg:px-8">
      <SectionHeading kicker="Vigor" title="Our Newsletter" />
      <p className="mt-2 text-center text-sm">
        Get class schedules, member offers, and training tips straight to your inbox.
      </p>
      {subscribed ? (
        <p
          role="status"
          className="mt-10 rounded-[10px] bg-brand/10 px-6 py-4 text-center text-sm font-semibold text-brand"
        >
          Thanks, {name || 'friend'} — you are on the list!
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="newsletter-name" className="sr-only">
                Your Name
              </label>
              <input
                id="newsletter-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                className="h-[55px] w-full rounded-[10px] border-[3px] border-line px-10 text-sm italic text-body placeholder:text-body focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Your E-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your E-mail"
                className="h-[55px] w-full rounded-[10px] border-[3px] border-line px-10 text-sm italic text-body placeholder:text-body focus:border-brand focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-[10px] bg-gradient-to-r from-brand-light to-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-white"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
