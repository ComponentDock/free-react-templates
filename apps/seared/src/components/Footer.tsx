import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Restaurant info */}
          <div>
            <h4 className="mb-4 text-xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
              Seared Restaurant
            </h4>
            <p className="text-sm leading-relaxed text-white/60">
              Experience the art of fine dining with our carefully crafted dishes, warm ambiance,
              and exceptional service that makes every meal unforgettable.
            </p>
          </div>

          {/* Service hours */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Service Hours</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <span className="font-semibold text-white/80">Lunch Service:</span> 11:30 AM — 3:00
                PM
              </li>
              <li>
                <span className="font-semibold text-white/80">Dinner Service:</span> 5:00 PM — 11:00
                PM
              </li>
              <li>
                <span className="font-semibold text-white/80">Sunday:</span> Closed
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/60 transition hover:text-brand">
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 transition hover:text-brand">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#footer" className="text-white/60 transition hover:text-brand">
                  Get in Touch
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 transition hover:text-brand">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Newsletter</h4>
            <p className="mb-4 text-sm text-white/60">
              Subscribe to get updates on special events and exclusive offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:border-brand focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 text-white transition hover:bg-brand-light"
                aria-label="Subscribe"
              >
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Seared Restaurant. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition hover:text-brand-light"
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
