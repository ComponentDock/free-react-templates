import { type FormEvent, useState } from 'react'
import { Send } from 'lucide-react'

const footerLinks = [
  'Home',
  'Projects',
  'Process',
  'Testimonials',
  'Services',
  'Pricing',
  'Contact',
] as const

function handleSubscribe(e: FormEvent) {
  e.preventDefault()
}

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-paper pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* About */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold uppercase">About Us</h4>
            <p className="text-sm leading-relaxed text-mist">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic
              ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque,
              quos fugit sunt sit quaerat dicta.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold uppercase">Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm text-mist transition-colors hover:text-brand"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="mb-4 font-display text-lg font-bold uppercase">Subscribe</h4>
            <p className="mb-4 text-sm text-mist">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded border border-divider bg-white px-4 py-2 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded bg-brand px-4 py-2 text-white transition-colors hover:bg-brand/90"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-divider pt-6 text-center">
          <p className="text-sm text-mist">
            &copy; {new Date().getFullYear()} Adept. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
