import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './social-icons'

const popularLinks = ['Aromatherapy', 'Skin Care', 'Herbal Spa', 'Body Massage'] as const

const quickLinks = ['About', 'Our Spa', 'Treatments', 'Specialists', 'Contact'] as const

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'YouTube', Icon: YoutubeIcon },
] as const

const contactRows = [
  { Icon: MapPin, text: '203 Fake St. Mountain View, San Francisco, California, USA' },
  { Icon: Phone, text: '+2 392 3929 210' },
  { Icon: Mail, text: 'info@yourdomain.com' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl">
              Serenity<span className="text-brand">.</span>
            </p>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Popular links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Popular Links
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              {popularLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#treatments"
                    className="text-white/60 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-white/60 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Have a Questions?
            </h2>
            <address className="mt-5 space-y-4 text-sm not-italic">
              {contactRows.map(({ Icon, text }) => (
                <p key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-white/60">{text}</span>
                </p>
              ))}
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Serenity — Free React Template
        </div>
      </div>
    </footer>
  )
}
