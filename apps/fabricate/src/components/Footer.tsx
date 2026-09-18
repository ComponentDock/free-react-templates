import { Send } from 'lucide-react'
import { useState } from 'react'

function handleSubscribe(e: React.FormEvent) {
  e.preventDefault()
}

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="py-16 bg-ink">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* About */}
          <div className="md:col-span-5">
            <h6 className="text-white font-semibold text-lg mb-4">About Us</h6>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We are a leading industrial engineering company providing comprehensive solutions for
              manufacturing, construction, and maintenance across diverse sectors.
            </p>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Fabricate. All rights reserved.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-5">
            <h6 className="text-white font-semibold text-lg mb-4">Newsletter</h6>
            <p className="text-white/60 text-sm mb-4">Stay updated with our latest</p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-l px-4 py-2.5 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-dark text-white px-4 rounded-r transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h6 className="text-white font-semibold text-lg mb-4">Follow Us</h6>
            <p className="text-white/60 text-sm mb-4">Let us be social</p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path
                    fill="#222"
                    d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Component Dock attribution */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:text-brand-dark transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
