import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { useState, type FormEvent } from 'react'

const contactCards = [
  { icon: MapPin, title: 'Address', value: '198 West 21st Street, Suite 721, New York, NY 10016' },
  { icon: Phone, title: 'Contact Number', value: '+1 (234) 567-8901' },
  { icon: Mail, title: 'Email Address', value: 'info@quillbooks.com' },
  { icon: Globe, title: 'Website', value: 'quillbooks.com' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Contact Me</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Have a question or want to collaborate? Reach out and let&apos;s start a conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl bg-gray-50 p-6 text-center transition-colors hover:bg-accent-400/5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-400/10 text-accent-400">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-gray-50 p-8">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
              aria-label="Your email"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
              aria-label="Subject"
            />
            <textarea
              rows={6}
              placeholder="Message"
              className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-400/20"
              aria-label="Message"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent-400 px-8 py-3 font-display font-semibold text-white transition-colors hover:bg-accent-500"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
          <div className="flex items-center justify-center rounded-xl bg-navy/5 p-8">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-accent-400" />
              <p className="mt-4 font-display text-lg font-semibold text-navy">Visit Us</p>
              <p className="mt-2 text-sm text-gray-500">
                198 West 21st Street, Suite 721
                <br />
                New York, NY 10016
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
