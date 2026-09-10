import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Contact Us</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Get in touch with our team for any questions or to schedule a consultation.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <MapPin className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h4 className="font-bold text-ink">Address</h4>
                <p className="text-sm text-gray-500">123 Financial Avenue, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Phone className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h4 className="font-bold text-ink">Phone</h4>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10">
                <Mail className="h-6 w-6 text-brand" />
              </div>
              <div>
                <h4 className="font-bold text-ink">Email</h4>
                <p className="text-sm text-gray-500">info@bankcraft.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-lg font-bold text-secondary">
                  Thank you! We will get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
