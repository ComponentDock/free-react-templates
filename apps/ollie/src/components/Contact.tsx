import { Mail, Phone, MapPin, Send } from 'lucide-react'

interface ContactProps {
  className?: string
}

export function Contact({ className = '' }: ContactProps) {
  return (
    <section id="contact" className={`py-20 bg-bg-dark ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto" />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Form */}
          <div className="lg:w-2/3">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-oswald uppercase tracking-wider text-gray-300 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full rounded bg-surface px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-oswald uppercase tracking-wider text-gray-300 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full rounded bg-surface px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-oswald uppercase tracking-wider text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded bg-surface px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-oswald uppercase tracking-wider text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded bg-surface px-4 py-3 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-brand resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-oswald font-semibold uppercase tracking-wider px-8 py-3 rounded transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="rounded-lg bg-surface p-8">
              <h3 className="font-oswald text-xl font-semibold uppercase tracking-wider text-white mb-6">
                Contact Info
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-muted text-sm">123 Skate Lane, Venice Beach, CA 90291</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-brand mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-muted text-sm">+1 (310) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-brand mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-muted text-sm">hello@ollieskate.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-muted text-sm leading-relaxed">
                  Ready to take your skating to the next level? Drop us a message and we will get
                  back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
