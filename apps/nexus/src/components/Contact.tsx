import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text">Contact Us</h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded bg-green-50 p-6 text-center text-green-700">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    required
                    className="border border-gray-300 px-4 py-3 text-sm focus:border-brand-pink focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    required
                    className="border border-gray-300 px-4 py-3 text-sm focus:border-brand-pink focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-brand-pink focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full resize-none border border-gray-300 px-4 py-3 text-sm focus:border-brand-pink focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-brand-pink px-8 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-pink-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="flex items-center justify-center">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDE0JzM3LjMiVw!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
