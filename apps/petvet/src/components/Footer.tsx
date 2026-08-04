import { SocialLinks } from './SocialLinks'

const menuLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Groomer', href: '#groomers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const serviceLinks = [
  'Pet Adoption',
  'Pet Grooming',
  'Vaccination',
  'Pet Spa',
  'Pet Sitting',
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-night pb-10 pt-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-black text-white">
              Petvet<span className="text-brand"> Pet Care</span>
            </h3>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Menu</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Have a Questions?</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
              <li>
                <a href="tel:+23923929210" className="transition-colors hover:text-brand">
                  +2 392 3929 210
                </a>
              </li>
              <li>
                <a href="mailto:info@yourdomain.com" className="transition-colors hover:text-brand">
                  info@yourdomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm font-medium">
            Copyright © {new Date().getFullYear()} Petvet. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
