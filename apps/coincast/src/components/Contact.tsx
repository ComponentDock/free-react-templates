import { useState, type FormEvent } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid min-h-[500px] max-w-6xl lg:grid-cols-2">
        {/* Background image — hidden on mobile */}
        <div
          className="hidden bg-cover bg-center lg:block"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/coincast-contact/800/500)' }}
          aria-hidden="true"
        />

        {/* Form */}
        <div className="flex items-center bg-paper p-8 lg:p-12">
          <div className="w-full max-w-md">
            <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
              Request A Call Back
            </h2>
            <div className="mt-2 h-1 w-12 bg-brand" />

            {submitted ? (
              <p className="mt-6 text-brand font-semibold">
                Thank you! We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-mist/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-mist/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-mist/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-mist/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Your Message"
                    className="w-full resize-none rounded border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-mist/60 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded bg-brand px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                >
                  Submit Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
