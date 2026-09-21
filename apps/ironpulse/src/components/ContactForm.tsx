import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        {/* Map placeholder */}
        <div className="flex h-80 items-center justify-center bg-dark md:h-auto">
          <span className="text-gray-500">Map Location</span>
        </div>
        {/* Form */}
        <div className="bg-gray-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-dark">Contact Us</h2>
          {submitted ? (
            <p className="text-brand">Thank you! Your message has been submitted.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  required
                  className="rounded border border-gray-300 px-4 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  required
                  className="rounded border border-gray-300 px-4 py-2 text-sm"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  required
                  className="rounded border border-gray-300 px-4 py-2 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  aria-label="Phone"
                  required
                  className="rounded border border-gray-300 px-4 py-2 text-sm"
                />
              </div>
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={4}
                className="resize-none rounded border border-gray-300 px-4 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded bg-brand px-6 py-2 font-semibold text-dark transition hover:bg-brand-dark"
              >
                Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
