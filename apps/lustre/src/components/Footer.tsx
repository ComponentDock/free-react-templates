import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer
      id="contact"
      aria-label="Contact"
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lustre-footer/1920/900')" }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold text-white sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-white/70">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Contact Info</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                <a href="tel:+2393929210" className="transition-colors hover:text-gold-400">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                <a
                  href="mailto:info@yourdomain.com"
                  className="transition-colors hover:text-gold-400"
                >
                  info@yourdomain.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-white">Leave a comment</h3>
            {submitted ? (
              <p className="mt-6 text-white/80" role="status">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white focus:border-gold-500 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    E-mail
                  </span>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white focus:border-gold-500 focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    Subject
                  </span>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white focus:border-gold-500 focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-white/60">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    className="w-full border-b border-white/30 bg-transparent px-1 py-2 text-sm text-white focus:border-gold-500 focus:outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-gold-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-ink-soft transition-colors hover:bg-gold-400 sm:col-span-2"
                >
                  send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Lustre. All rights reserved.
      </div>
    </footer>
  )
}
