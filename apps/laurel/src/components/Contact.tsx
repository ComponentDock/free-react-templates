import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-brand-heading sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-brand-body">Have questions? We would love to hear from you.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="flex items-center justify-center rounded-[10px] bg-gray-200 shadow-md h-96">
            <p className="text-sm text-gray-500">Map Placeholder</p>
          </div>

          {/* Contact form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="contact-name"
                className="mb-1 block text-sm font-medium text-brand-heading"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-1 block text-sm font-medium text-brand-heading"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="mb-1 block text-sm font-medium text-brand-heading"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject"
                className="w-full rounded-[5px] border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1 block text-sm font-medium text-brand-heading"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Your message"
                className="w-full resize-none rounded-[5px] border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 rounded-[5px] bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
