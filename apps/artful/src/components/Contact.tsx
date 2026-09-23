import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-artful-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold text-artful-heading">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-artful-heading">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 flex-shrink-0 text-artful-red" />
                <span className="text-sm text-artful-body">
                  123 Creative Street, Art District, NY 10001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-artful-red" />
                <span className="text-sm text-artful-body">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-artful-red" />
                <span className="text-sm text-artful-body">info@artfulstudio.com</span>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-artful-heading">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-artful-red focus:outline-none focus:ring-1 focus:ring-artful-red"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-artful-heading">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-artful-red focus:outline-none focus:ring-1 focus:ring-artful-red"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-artful-heading"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full resize-none rounded border border-gray-300 px-4 py-2 text-sm focus:border-artful-red focus:outline-none focus:ring-1 focus:ring-artful-red"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-artful-red px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
