import { contact } from '../data'

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Map placeholder */}
          <div className="flex w-full items-center justify-center bg-gray-200 py-32 lg:w-1/2">
            <span className="text-sm text-gray-500">Map Location</span>
          </div>

          {/* Form */}
          <div className="w-full px-8 py-20 lg:w-1/2">
            <h1 className="mb-2 text-3xl font-semibold text-heading">{contact.title}</h1>
            <p className="mb-8 text-body-text">{contact.subtitle}</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
              aria-label="Contact form"
            >
              <input
                type="text"
                name="fname"
                placeholder="Enter your name"
                className="border-b border-gray-300 bg-transparent py-3 text-sm text-heading outline-none placeholder:text-gray-400 focus:border-brand"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="border-b border-gray-300 bg-transparent py-3 text-sm text-heading outline-none placeholder:text-gray-400 focus:border-brand"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border-b border-gray-300 bg-transparent py-3 text-sm text-heading outline-none placeholder:text-gray-400 focus:border-brand"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="border-b border-gray-300 bg-transparent py-3 text-sm text-heading outline-none placeholder:text-gray-400 focus:border-brand"
                required
              />
              <div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
