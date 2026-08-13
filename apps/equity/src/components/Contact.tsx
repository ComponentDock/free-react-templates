import { useState, type FormEvent } from 'react'
import { contact } from '../data'

/** Contact section (reference `.site-section.bg-light`): a contact form
 *  (first/last name, email, message) with a "Send Message" submit button and
 *  a "Call Us" info block with a phone link. */
export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" aria-label="Contact Us" className="bg-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-4xl font-bold text-[#25262a]">{contact.heading}</h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 sm:grid-cols-2"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="first-name" className="text-sm font-semibold text-[#25262a]">
                First name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                placeholder="First name"
                className="mt-2 h-[55px] w-full border-0 bg-white px-4 text-sm shadow-[0_4px_5px_-3px_rgba(0,0,0,0.2)] outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-sm font-semibold text-[#25262a]">
                Last name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                placeholder="Last name"
                className="mt-2 h-[55px] w-full border-0 bg-white px-4 text-sm shadow-[0_4px_5px_-3px_rgba(0,0,0,0.2)] outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-sm font-semibold text-[#25262a]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                className="mt-2 h-[55px] w-full border-0 bg-white px-4 text-sm shadow-[0_4px_5px_-3px_rgba(0,0,0,0.2)] outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#25262a]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message."
                rows={5}
                className="mt-2 w-full border-0 bg-white px-4 py-3 text-sm shadow-[0_4px_5px_-3px_rgba(0,0,0,0.2)] outline-none focus:ring-2 focus:ring-primary-600"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="h-12 bg-primary-600 px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Send Message
              </button>
            </div>
          </form>

          {sent ? (
            <p role="status" className="mt-6 text-sm font-semibold text-primary-700">
              Thanks — your message has been sent.
            </p>
          ) : null}
        </div>

        <div>
          <h3 className="font-heading text-2xl font-bold text-[#25262a]">
            Need to know more on details? Call Us
          </h3>
          <a
            href={'tel:' + contact.phoneHref}
            className="mt-6 inline-block font-heading text-5xl font-extrabold text-primary-600"
          >
            {contact.phone}
          </a>
          <p className="mt-6 max-w-md leading-relaxed text-[#939393]">{contact.note}</p>
        </div>
      </div>
    </section>
  )
}
