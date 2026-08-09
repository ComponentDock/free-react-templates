import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const

const contact = [
  { icon: MapPin, lines: ['509 Myrtle Ave, Brooklyn, NY 11205, USA'] },
  { icon: Phone, lines: ['+1 718-783-1936', '+1 718-783-1966'] },
  { icon: Mail, lines: ['Makeup.artist@gmail.com'] },
] as const

export function Footer() {
  return (
    <footer className="bg-ink py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <a href="#home" className="font-display text-2xl font-semibold text-white">
              <span className="text-brand">G</span>loss
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Professional makeup artistry for weddings, events and editorial shoots. Your face,
              beautifully done.
            </p>
            <ul className="mt-6 flex gap-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href="#home"
                    aria-label={social.label}
                    className="text-white/60 transition-colors hover:text-brand"
                  >
                    <BrandIcon name={social.name} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-white">Contact</h2>
            <ul className="mt-5 space-y-4">
              {contact.map(({ icon: Icon, lines }) => (
                <li key={lines[0]} className="flex gap-3 text-sm text-white/60">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>
                    {lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-white">Follow us on</h2>
            <p className="mt-5 text-sm font-semibold text-brand">@gloss</p>
            <p className="mt-2 text-sm text-white/60">
              Daily looks, behind-the-scenes and booking updates.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Gloss — Free React Template
          </p>
        </div>
      </div>
    </footer>
  )
}
