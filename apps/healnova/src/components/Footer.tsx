import { useState, type FormEvent } from 'react'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const departments = [
  'General Surgery',
  'Cardiology',
  'Neurology',
  'Ophthalmology',
  'Orthopedics',
] as const
const services = [
  'General Surgery',
  'Outpatient Services',
  'Respiratory Therapy',
  'Cardiac Clinic',
  'Diagnostics',
] as const
const navLinks = ['Home', 'About', 'Services', 'Team', 'Blog', 'Contact'] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-brand text-white transition-colors dark:bg-brand-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                <Heart className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold">
                Healnova<span className="text-white">.</span>
              </span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Providing exceptional healthcare services with compassion, expertise, and modern
              technology for our community.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white/70 transition-colors hover:border-white hover:bg-white hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Departments</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {departments.map((dept) => (
                <li key={dept}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Our Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.map((svc) => (
                <li key={svc}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Subscribe Newsletter</h3>
            <p className="mt-5 text-sm text-white/70">Get updates on health tips and news</p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-sm text-white">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-white/80"
                >
                  Your Email Address
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-white px-5 py-3 text-sm font-bold text-brand transition-colors hover:bg-white/90"
                  >
                    Subscribe
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-white">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                1-999-123-4567
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                info@healnova.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <span>2918 Medical Center Drive</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Healnova. All rights reserved.{' '}
        <a
          href="https://www.componentdock.com/"
          className="underline transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
