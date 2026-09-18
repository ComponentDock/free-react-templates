import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { MapPin, Mail, Phone } from 'lucide-react'

export interface ContactProps {
  className?: string
}

export function Contact({ className }: ContactProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className={cn('bg-dark py-24', className)}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary-400">
            <span className="mr-2 text-accent-400">05</span>
            Get In Touch
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
            Have an idea or an epic project in mind? Talk to us.
            <br className="hidden md:block" />
            Let&apos;s work together and make something great. Drop us a line at{' '}
            <a
              href="mailto:hello@astra.com"
              className="text-primary-400 underline decoration-primary-400/30 transition-colors hover:text-primary-300"
            >
              hello@astra.com
            </a>
          </h2>
        </div>

        {/* Info columns */}
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-sans text-lg font-semibold text-white">Where to Find Us</h3>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin size={18} className="mt-1 shrink-0 text-primary-400" />
              <p className="font-sans text-sm leading-relaxed">
                1600 Amphitheatre Parkway
                <br />
                Mountain View, California
                <br />
                94043 US
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-lg font-semibold text-white">Follow Us</h3>
            <ul className="space-y-2">
              {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="font-sans text-sm text-white/70 transition-colors hover:text-primary-400"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@astra.com"
                  className="flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-primary-400"
                >
                  <Mail size={16} className="shrink-0" />
                  info@astra.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1975432345"
                  className="flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-primary-400"
                >
                  <Phone size={16} className="shrink-0" />
                  +197 543 2345
                </a>
              </li>
              <li>
                <a
                  href="tel:+1971239876"
                  className="flex items-center gap-2 font-sans text-sm text-white/70 transition-colors hover:text-primary-400"
                >
                  <Phone size={16} className="shrink-0" />
                  +197 123 9876
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA + Subscribe */}
        <div className="mt-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <a
            href="#about"
            className="inline-block rounded bg-primary-400 px-8 py-3 font-sans text-sm font-semibold text-white transition-all hover:bg-primary-500"
          >
            Let&apos;s Talk
          </a>

          <div className="w-full max-w-md">
            <h4 className="mb-3 font-sans text-sm font-semibold text-white">Subscribe</h4>
            {subscribed ? (
              <p className="font-sans text-sm text-primary-400">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="flex-1 rounded border border-white/20 bg-white/5 px-4 py-2 font-sans text-sm text-white placeholder:text-white/40 focus:border-primary-400 focus:outline-none"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="rounded bg-primary-400 px-6 py-2 font-sans text-sm font-semibold text-white transition-colors hover:bg-primary-500"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
