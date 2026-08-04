import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const latestNews = [
  { label: 'The Best Diet for Senior Dogs', href: '#blog' },
  { label: 'How to Introduce a New Kitten', href: '#blog' },
  { label: 'Keeping Cats Entertained Indoors', href: '#blog' },
] as const

export function Footer() {
  return (
    <footer className="bg-night py-16 text-white/60 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#top" className="text-2xl font-extrabold text-white">
            Pet<span className="text-brand">sitting</span>
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
          <h3 className="text-base font-bold text-white">Latest News</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {latestNews.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Have a Questions?</h3>
          <address className="mt-5 space-y-3 text-sm font-light not-italic">
            <p>120 Raymond Rd, New York</p>
            <p>hello@petsitting.example</p>
            <a href="tel:+1234567890" className="block transition-colors hover:text-white">
              +1 234 567 890
            </a>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light">
          Copyright © {new Date().getFullYear()} Petsitting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
