import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const inputClasses =
    'w-full border border-[#ffe5e5] bg-transparent px-4 py-4 text-white placeholder:text-placeholder focus:border-brand-deep focus:outline-none'

  return (
    <section id="contact" aria-label="Contact" className="mx-auto w-4/5 bg-black py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-display text-5xl font-bold text-white lg:text-6xl">
          Contact us<span className="text-brand-deep">.</span>
        </h2>

        <form className="mt-14" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="E-mail"
                className={inputClasses}
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Message"
              className={cn(inputClasses, 'resize-none')}
            />
          </div>
          <div className="mt-8">
            {submitted ? (
              <p role="status" className="text-lg text-white">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <Button
                type="submit"
                className={cn(
                  'rounded-none bg-brand-deep px-12 py-5 text-base font-bold uppercase tracking-wide hover:bg-white hover:text-ink',
                )}
              >
                Send Message
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
