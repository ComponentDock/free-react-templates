import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const socialLinks = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
]

const quickLinks = ['Sermons', 'Ministries', 'Events', 'Contact']

export function Footer() {
  return (
    <footer className="border-t border-charcoal-700 bg-charcoal-800 py-20 text-[13px] text-white/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-6 font-heading text-lg text-white">About Liturgy</h3>
            <p className="mb-6 leading-relaxed">
              A place of worship, community, and spiritual growth. Join us as we come together in
              faith and purpose.
            </p>
            <ul className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-golden-400 hover:text-golden-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-heading text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-golden-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-heading text-lg text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <span className="block text-white/50">Address:</span>
                <span className="text-white">34 Street Name, City Name Here, United States</span>
              </li>
              <li>
                <span className="block text-white/50">Telephone:</span>
                <span className="text-white">+1 242 4942 290</span>
              </li>
              <li>
                <span className="block text-white/50">Email:</span>
                <span className="text-white">info@yourdomain.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-700 pt-6 text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-golden-400 transition-opacity hover:opacity-80"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
