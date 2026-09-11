import { useState, type FormEvent } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact-section" className="bg-surface-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
        </div>

        <div className="mb-12 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-1 font-bold text-primary">Address</p>
            <p className="text-gray-600">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div>
            <p className="mb-1 font-bold text-primary">Phone</p>
            <a href="tel:+12323235324" className="text-gray-600 hover:text-primary">
              +1 232 3235 324
            </a>
          </div>
          <div>
            <p className="mb-1 font-bold text-primary">Email Address</p>
            <a href="mailto:youremail@domain.com" className="text-gray-600 hover:text-primary">
              youremail@domain.com
            </a>
          </div>
        </div>

        {submitted ? (
          <div className="rounded bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-primary">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-4xl">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Write your message."
                rows={10}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded bg-primary px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
