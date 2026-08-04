import { SocialLinks } from './SocialLinks'

const companyLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
] as const

const serviceLinks = [
  { label: 'Pet Boarding', href: '#services' },
  { label: 'Pet Treatment', href: '#services' },
  { label: 'Vaccinations', href: '#services' },
  { label: 'Pet Grooming', href: '#services' },
  { label: 'Day Care', href: '#services' },
] as const

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-white/60 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#top" className="text-2xl font-extrabold text-white">
            pet<span className="text-brand">care</span>
          </a>
          <p className="mt-5 text-sm font-light leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Get in Touch</h3>
          <address className="mt-5 space-y-3 text-sm font-light not-italic">
            <p>120 Raymond Rd, New York</p>
            <p>hello@petcare.example</p>
            <a href="tel:+01654066456" className="block transition-colors hover:text-white">
              01654.066.456
            </a>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light">
          Copyright © {new Date().getFullYear()} Petcare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
