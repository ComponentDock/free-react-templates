import { useState, type FormEvent } from 'react'

const featureLinks = [
  'About Us',
  'Press Releases',
  'Testimonials',
  'Terms of Service',
  'Privacy',
  'Contact Us',
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="bg-gradient-to-r from-[#7a5e86] via-[#a75e67] to-[#f77b2e] text-white py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-heading uppercase tracking-wider mb-4">About Us</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Stratum is a leading mining and industrial company providing comprehensive
                  extraction, processing, and logistics solutions across the globe.
                </p>
              </div>
              <div>
                <h2 className="text-sm font-heading uppercase tracking-wider mb-4">Features</h2>
                <ul className="space-y-2">
                  {featureLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/50 text-sm hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="mb-8">
              <h2 className="text-sm font-heading uppercase tracking-wider mb-4">
                Subscribe to Newsletter
              </h2>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-10 px-4 bg-transparent border border-white/20 text-white placeholder-white/40 text-sm outline-none focus:border-white/50"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="bg-[#ff8b00] text-white px-4 text-sm font-medium hover:bg-[#e07b00] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-sm font-heading uppercase tracking-wider mb-4">Follow Us</h2>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-white/50 hover:text-white transition-colors text-sm"
                    aria-label={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Stratum. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
