import { useState, type FormEvent } from 'react'
import { phoneLine } from '../data'

const inputClass =
  'h-[52px] w-full rounded border border-gray-300 bg-white px-4 text-body outline-none transition-colors focus:border-brand'

/** Contact section on the light #f8f9fa background: centered "Contact Us"
 *  heading, a form (First name / Last name / Email / message + solid coral
 *  "Send Message" submit) and a "Call Us" info column. */
export function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact-section" data-testid="contact" className="bg-light py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="block-heading mb-5 text-center">
          <span className="eyebrow">Get In Touch</span>
          <h2>Contact Us</h2>
        </div>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row">
          <form
            onSubmit={handleSubmit}
            data-testid="contact-form"
            className="flex-1 space-y-4"
            aria-label="Contact form"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">First name</span>
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="sr-only">Last name</span>
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className={inputClass}
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                placeholder="Write your message."
                rows={10}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-body outline-none transition-colors focus:border-brand"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded bg-brand px-5 py-3 font-bold text-white transition-colors hover:bg-primary-600"
            >
              Send Message
            </button>
          </form>

          <div className="lg:w-1/3 lg:pl-10">
            <h3 className="text-2xl font-bold text-black">
              Need to know more on details? Call Us {phoneLine}
            </h3>
            <p className="mt-4 text-body">
              Our team answers questions about our operations, partnerships and investment
              opportunities — reach out any business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
