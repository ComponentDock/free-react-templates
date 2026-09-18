import { useState } from 'react'

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Make an Appointment
          </p>
          <h2 className="text-3xl font-bold text-white">Book Your Session</h2>
        </div>
        {submitted ? (
          <p className="text-center text-lg text-brand-400">Thank you! We&apos;ll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-400 focus:outline-none"
            />
            <input
              type="date"
              className="rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none"
            />
            <input
              type="time"
              className="rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="col-span-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-brand-400 focus:outline-none"
            />
            <div className="col-span-full text-center">
              <button
                type="submit"
                className="rounded bg-brand-400 px-10 py-3 font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
