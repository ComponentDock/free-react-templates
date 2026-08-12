import type { FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { CONTACT_HEADING } from '../data'

/**
 * Contact — light-grey section with a centered form: First/Last name
 * row, email input, message textarea, and a block-level orange
 * "Send Message" submit. Submitting never navigates away.
 */
export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact-section" aria-label="Contact us" className="bg-light py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-black md:text-6xl">
            {CONTACT_HEADING}
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl space-y-4"
          aria-label="Contact form"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="sr-only">
                First name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First name"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="sr-only">
                Last name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Last name"
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message."
              rows={10}
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded px-5 py-3 text-base uppercase tracking-wider"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
