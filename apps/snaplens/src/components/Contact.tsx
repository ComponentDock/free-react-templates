import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://picsum.photos/seed/snaplens-contact/1920/900)',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        {/* Left: info */}
        <div>
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-accent">
            Amazing Studio
          </span>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Stay in Touch</h2>
          <p className="mb-8 max-w-md leading-relaxed text-white/70">
            Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
            Praesent malesuada congue magna at finibus.
          </p>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              +45 677 899 3000 223
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent" />
              office@snaplens.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-accent" />
              Main Str. no 45-46, b3, 56832,
              <br />
              Los Angeles, CA
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-accent"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-accent"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-accent"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="resize-none border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur transition focus:border-accent"
          />
          <button
            type="submit"
            className="self-start border-y-2 border-white px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-ink-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
