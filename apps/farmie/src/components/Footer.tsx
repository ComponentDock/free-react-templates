import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Shop', href: '#products' },
  { label: 'News', href: '#news' },
  { label: 'Contact Us', href: '#contact' },
] as const

const recentNews = [
  { label: 'The Best Time To Harvest Organic Strawberries', href: '#news' },
  { label: 'How We Keep Our Soil Healthy Year After Year', href: '#news' },
  { label: 'From Pasture To Plate: Our Grass-Fed Beef', href: '#news' },
] as const

export function Footer() {
  return (
    <footer className="bg-night py-16 text-white/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <h3 className="text-base font-bold text-white">About Us</h3>
          <p className="mt-5 text-sm font-light leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <address className="mt-5 space-y-2 text-sm font-light not-italic">
            <p>120 Raymond Rd, New York</p>
            <p>info.deercreative@gmail.com</p>
            <p>+84 223 9000</p>
          </address>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Quick Link</h3>
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
          <h3 className="text-base font-bold text-white">Recent News</h3>
          <ul className="mt-5 space-y-3 text-sm font-light">
            {recentNews.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-white">Stay Connected</h3>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 px-4 pt-8 sm:flex-row sm:px-6">
        <p className="text-sm font-light">
          Copyright © {new Date().getFullYear()} Farmie. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
