import { Send } from 'lucide-react'

export function ConsultSection() {
  return (
    <section
      id="contact"
      className="parallax-bg relative py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tinybrights-consult/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-brand-dark/80" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-white">
          Book a Free Consultation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/70">
          Schedule a visit and discover how TinyBrights can brighten your child&apos;s future.
        </p>

        <form
          className="mt-10 grid gap-6 rounded-2xl bg-white/10 p-8 backdrop-blur-sm sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 focus:border-brand-orange focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 focus:border-brand-orange focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 focus:border-brand-orange focus:outline-none sm:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 focus:border-brand-orange focus:outline-none sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="btn-pill inline-flex items-center gap-2 bg-brand-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange/90"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
