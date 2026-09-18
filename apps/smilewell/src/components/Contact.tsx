import { type FormEvent, useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-ink">Contact Us</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-lg border border-brand/20 bg-brand/5 p-8 text-center">
                <p className="text-lg font-bold text-brand">Thank you!</p>
                <p className="mt-2 text-sm text-smoke">
                  We have received your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-ink">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded border border-gray-200 px-4 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-ink">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded border border-gray-200 px-4 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded border border-gray-200 px-4 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded border border-gray-200 px-4 py-2 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar text */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-xl font-bold text-ink">Need a call for presentation?</h3>
            <p className="mb-4 leading-relaxed text-smoke">
              We would be happy to arrange a presentation for your organization. Our team can walk
              you through our services and discuss how we can meet your dental care needs.
            </p>
            <p className="leading-relaxed text-smoke">
              Feel free to reach out via the form or call us directly. We respond to all inquiries
              within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
