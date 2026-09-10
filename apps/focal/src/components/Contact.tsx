import type { FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
}

export function Contact() {
  return (
    <section id="contact" className="py-20" aria-label="Contact us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="mt-1 text-brand" />
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-900">
                  Address
                </h3>
                <p className="text-gray-500">198 West 21th Street, Suite 721 New York, NY 10016</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={24} className="mt-1 text-brand" />
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-900">
                  Phone
                </h3>
                <p className="text-gray-500">+1 1234 567 890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={24} className="mt-1 text-brand" />
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-900">
                  Email
                </h3>
                <p className="text-gray-500">info@focal.com</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold uppercase tracking-wide text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold uppercase tracking-wide text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold uppercase tracking-wide text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>
            <button
              type="submit"
              className="bg-black px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
