import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/shotwise-contact/1600/700)' }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-400 opacity-85" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-light text-white">
            Send Us <span className="font-semibold">Message</span>
          </h2>
          <p className="mt-3 text-sm text-white/80">
            Most people who work in an office environment, buy computer products.
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-3xl"
          aria-label="Contact form"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              className="rounded border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="mt-4 w-full rounded border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white"
            required
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-2.5 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              Send Message
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
