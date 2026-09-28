import { type FormEvent } from 'react'
import { User, Mail, Phone, MessageSquare } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-light-bg py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Get In Touch
          </h2>
        </div>
        <form onSubmit={handleSubmit} aria-label="Contact form" className="rounded-lg bg-white p-8">
          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Name
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <User size={16} className="text-muted" />
                <input
                  type="text"
                  id="contact-name"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Email
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Mail size={16} className="text-muted" />
                <input
                  type="email"
                  id="contact-email"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Phone
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Phone size={16} className="text-muted" />
                <input
                  type="tel"
                  id="contact-phone"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact-message"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
            >
              Message
            </label>
            <div className="flex items-start gap-2 border-b border-gray-300 py-2">
              <MessageSquare size={16} className="mt-0.5 text-muted" />
              <textarea
                id="contact-message"
                rows={4}
                className="w-full bg-transparent text-sm text-charcoal outline-none"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded border border-charcoal bg-charcoal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
