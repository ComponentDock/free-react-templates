import { useState } from 'react'

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
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
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Training', id: 'training' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#212529] text-white" role="contentinfo">
      <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-3">
        {/* About Us */}
        <div>
          <h3 className="mb-4 text-xl font-bold">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Northstar is a premier life coaching service dedicated to helping individuals unlock
            their full potential. With personalized coaching programs and expert guidance, we
            empower you to create the life you've always dreamed of. Our mission is to inspire
            growth, foster resilience, and guide you on your journey to success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us + Newsletter */}
        <div>
          <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
          <div className="mb-6 flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <LinkedinIcon />
            </a>
          </div>

          <h4 className="mb-2 text-sm font-bold">Subscribe Newsletter</h4>
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-l border border-gray-600 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-r bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0265c5]"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © 2024 All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-primary transition-colors hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
