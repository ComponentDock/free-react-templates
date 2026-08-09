import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const services = ['Beauty', 'Wedding makeup', 'Event makeup', 'Creative Makeup'] as const

export function Cta() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-maroon py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Limited time offer
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
            Book online for <span className="text-brand">20% discount</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">
            Reserve your appointment today and enjoy a 20% discount on your first professional
            makeup session. Choose the service that fits your occasion and we'll take care of the
            rest.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Booking form"
          className="rounded-2xl bg-white/5 p-8 backdrop-blur"
        >
          <h3 className="text-center font-display text-2xl text-white">Get a quote</h3>
          {submitted ? (
            <p
              role="status"
              className="mt-6 rounded-xl bg-brand/20 px-4 py-3 text-sm font-medium text-white"
            >
              Thank you! Your booking request has been received — we'll be in touch shortly.
            </p>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-name" className="sr-only">
                  Name
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="cta-phone" className="sr-only">
                  Number phone
                </label>
                <input
                  id="cta-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Number phone"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="sr-only">
                  Email
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="cta-service" className="sr-only">
                  Choose services
                </label>
                <select
                  id="cta-service"
                  name="service"
                  required
                  className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white focus:border-brand focus:outline-none"
                >
                  <option value="" disabled selected className="bg-maroon">
                    Choose services
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-maroon">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="cta-message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={3}
                  placeholder="Your message"
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full uppercase tracking-widest"
                >
                  Book services
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
