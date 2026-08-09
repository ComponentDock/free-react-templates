import { MapPin, Phone, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TwitterIcon, FacebookIcon, LinkedInIcon, InstagramIcon } from './social-icons'

const socials = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
  { label: 'Instagram', Icon: InstagramIcon },
] as const

const contactRows: { icon: LucideIcon; label: string; text: string }[] = [
  { icon: MapPin, label: 'Address:', text: '34 Street Name, City Name Here, United States' },
  { icon: Phone, label: 'Telephone:', text: '+1 242 4942 290' },
  { icon: Mail, label: 'Email:', text: 'info@yourdomain.com' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Terms of Use', href: '#home' },
  { label: 'Disclaimers', href: '#home' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  return (
    <footer className="bg-footer py-24 text-black lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-bold uppercase tracking-[0.1em] text-black">
              About Kraft
            </h3>
            <p className="mt-5 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Alias nihil numquam
              aspernatur inventore sint eligendi nostrum!
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#home"
                    aria-label={`Kraft on ${label}`}
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold uppercase tracking-[0.1em] text-black">
              Contact Info
            </h3>
            <address className="mt-5 space-y-4 text-sm not-italic">
              {contactRows.map(({ icon: Icon, label, text }) => (
                <p key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="font-bold">{label}</span> {text}
                  </span>
                </p>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-base font-bold uppercase tracking-[0.1em] text-black">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-black/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} Kraft — Free React Template
        </div>
      </div>
    </footer>
  )
}
