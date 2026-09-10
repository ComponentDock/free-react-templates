import { ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-white pb-24 pt-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col overflow-hidden bg-white shadow-lg md:flex-row">
          <div className="md:w-1/3">
            <img
              src="https://picsum.photos/seed/azureline-contact/400/500"
              alt="Contact"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:w-2/3 md:p-16">
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full border border-gray-200 bg-transparent px-6 py-3 text-sm text-gray-700 outline-none focus:border-brand-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
                className="w-full border border-gray-200 bg-transparent px-6 py-3 text-sm text-gray-700 outline-none focus:border-brand-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={5}
                className="w-full resize-none border border-gray-200 bg-transparent px-6 py-3 text-sm text-gray-700 outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-300 px-8 py-3 text-xs font-medium uppercase text-white shadow transition-all hover:shadow-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
