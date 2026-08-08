import { Cross, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './social-icons'

const connectLinks = ['Plan Your Visit', 'Service Times', 'Small Groups', 'Contact Us']
const growLinks = ['Sermons', 'Events', 'Ministries', 'Give Online']
const resourceLinks = ['About Us', 'Our Beliefs', 'Leadership', 'Prayer Request']

const socials = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'YouTube', Icon: YouTubeIcon },
] as const

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label="Sanctuary home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-bold tracking-tight">Sanctuary</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A welcoming community of faith helping people know God, find freedom, discover
              purpose, and make a difference.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map(({ name, Icon }) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-300 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterColumn title="Connect" links={connectLinks} />
          <FooterColumn title="Grow" links={growLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        {/* Service times + contact */}
        <div className="mt-12 grid gap-8 border-t border-gray-800 pt-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-lg font-semibold">Service Times</h3>
            <ul className="mt-3 space-y-1 text-sm text-gray-400">
              <li>Sunday: 9:00 AM &amp; 11:00 AM</li>
              <li>Wednesday: 7:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>info@gracecommunity.church</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>(512) 555-1234</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>1200 Faith Avenue, Austin, TX 78701</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 Sanctuary. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#home" className="text-sm text-gray-400 transition-colors hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
