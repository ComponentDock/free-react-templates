import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Contact Us</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <form className="mx-auto max-w-3xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
            <input
              type="email"
              placeholder="Enter email address"
              className="rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
            />
          </div>
          <input
            type="text"
            placeholder="Enter your subject"
            className="mt-6 w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="mt-6 w-full resize-none rounded border border-gray-200 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand"
          />
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}
