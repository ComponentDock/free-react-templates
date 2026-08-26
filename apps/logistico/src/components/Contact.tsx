import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-dark">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Get in touch with our team for a custom logistics solution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-lg border border-gray-100 bg-white p-6 shadow-sm"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-dark placeholder-mist focus:border-brand focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
                className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-dark placeholder-mist focus:border-brand focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-dark placeholder-mist focus:border-brand focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-dark placeholder-mist focus:border-brand focus:outline-none"
            />
            <textarea
              placeholder="Message"
              aria-label="Message"
              rows={4}
              className="w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm text-dark placeholder-mist focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center space-y-6 p-6">
            <div>
              <h3 className="mb-1 text-lg font-bold text-dark">Address</h3>
              <p className="text-sm text-mist">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-dark">Phone</h3>
              <p className="text-sm text-mist">+1 (232) 323-5324</p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-dark">Email Address</h3>
              <p className="text-sm text-mist">info@logistico.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
