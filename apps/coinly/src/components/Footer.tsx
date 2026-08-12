import { BrandIcon, type BrandName } from './BrandIcon'

const resources = [
  'How to Buy Coin',
  'Coin Overview',
  'Blog News',
  'How to Sell Coin',
  'Purchase Theme',
]

const quickLinks = [
  'Network Stats',
  'Block Explorers',
  'Governance',
  'Exchange Markets',
  'Get Theme',
]

const socials: ReadonlyArray<{ label: string; name: BrandName; color: string }> = [
  { label: 'Facebook', name: 'facebook', color: '#4b6cd0' },
  { label: 'Google', name: 'google', color: '#f03b3b' },
  { label: 'Pinterest', name: 'pinterest', color: '#bb8950' },
  { label: 'Twitter', name: 'twitter', color: '#49a7f3' },
]

const phone = '(123) 456-7890'

export function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#solution" className="font-display text-2xl font-bold text-brand">
            Coinly
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Coinly is a modern bitcoin trading platform built on the blockchain. Buy, sell and
            exchange cryptocurrency with low fees, instant settlement and bank-grade security.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl font-medium text-brand">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {resources.map((item) => (
              <li key={item}>
                <a href="#contact" className="transition-colors hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl font-medium text-brand">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {quickLinks.map((item) => (
              <li key={item}>
                <a href="#contact" className="transition-colors hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl font-medium text-brand">Follow Us</h4>
          <ul aria-label="Follow us social links" className="mt-4 flex gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: social.color }}
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6 lg:flex-row lg:px-8">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <span aria-hidden="true">&hearts;</span> by Coinly — More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand transition-colors hover:text-accent"
            >
              Component Dock
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <li>
              <a href="#contact" className="transition-colors hover:text-brand">
                DPA
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-brand">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-brand">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="mailto:support@company.com" className="transition-colors hover:text-brand">
                support@company.com
              </a>
            </li>
            <li>
              <a
                href={'tel:' + phone.replace(/\D/g, '')}
                className="transition-colors hover:text-brand"
              >
                {phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
