import { Leaf } from 'lucide-react'

const quickLinks = [
  'Purchase',
  'FAQs',
  'Payment',
  'News',
  'Return',
  'Advertise',
  'Shipping',
  'Career',
  'Orders',
  'Policies',
]

const bestSellers = [
  { name: 'Cactus Flower', price: '$10.99', seed: 'verdant-bs1' },
  { name: 'Tulip Flower', price: '$11.99', seed: 'verdant-bs2' },
]

const contactInfo = [
  { label: 'Address:', value: '505 Silk Rd, New York' },
  { label: 'Phone:', value: '+1 234 122 122' },
  { label: 'Email:', value: 'info@verdant.garden' },
  { label: 'Open hours:', value: 'Mon - Sun: 8 AM to 9 PM' },
  { label: 'Happy hours:', value: 'Sat: 2 PM to 4 PM' },
]

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-brand">
              <Leaf className="h-6 w-6" />
              Verdant
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition-colors hover:text-brand"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick Link</h5>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Best Seller</h5>
            <div className="flex flex-col gap-4">
              {bestSellers.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/60/60`}
                    alt={item.name}
                    className="h-14 w-14 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <a href="#" className="text-sm font-medium text-white hover:text-brand">
                      {item.name}
                    </a>
                    <p className="text-sm text-gray-400">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h5>
            <div className="flex flex-col gap-2">
              {contactInfo.map((info) => (
                <p key={info.label} className="text-sm text-gray-400">
                  <span className="font-semibold text-white">{info.label}</span> {info.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
          <nav>
            <ul className="flex gap-4">
              {['Home', 'About', 'Service', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
