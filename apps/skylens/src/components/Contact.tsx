import { useState } from 'react'
import type { FormEvent } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-widest text-section-label">
              Contact Us
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold uppercase text-heading">
              Get a Quote
            </h2>
            {submitted ? (
              <p className="text-lg font-semibold text-brand">
                Thank you! We will get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border border-gray-300 px-4 py-3 font-body text-sm outline-none focus:border-brand"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border border-gray-300 px-4 py-3 font-body text-sm outline-none focus:border-brand"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="border border-gray-300 px-4 py-3 font-body text-sm outline-none focus:border-brand"
                />
                <select
                  name="topic"
                  className="border border-gray-300 px-4 py-3 font-body text-sm text-body outline-none focus:border-brand"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Topic
                  </option>
                  <option value="residential">Residential Photography</option>
                  <option value="commercial">Commercial Photography</option>
                  <option value="construction">Construction Monitoring</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="border border-gray-300 px-4 py-3 font-body text-sm outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="w-full bg-brand px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="hidden md:block">
            <img
              src="https://picsum.photos/seed/skylens-contact/600/500"
              alt="Contact SkyLens"
              className="w-full rounded object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
