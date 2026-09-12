import { Facebook, Twitter, Globe, Send } from 'lucide-react'

const IMPORTANT_LINKS = ['View Project', 'Contact Us', 'Testimonial', 'Properties', 'Support']

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us */}
          <div>
            <h4 className="font-display text-lg font-bold">About Us</h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Heaven fruitful doesn&apos;t over lesser days appear creeping seasons so behold
              bearing.
            </p>
            <p className="mt-6 font-display text-xl font-bold text-brand">ForgePoint</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>Address: 123 Industrial Blvd, Manufacturing District</li>
              <li>
                <a href="tel:+888044338899" className="hover:text-brand">
                  Phone: +8880 44338899
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand">
                  Our Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-display text-lg font-bold">Important Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {IMPORTANT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-bold">Newsletter</h4>
            <p className="mt-4 text-sm text-white/60">
              Heaven fruitful doesn&apos;t over lesser in days. Appear creeping seasons.
            </p>
            <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="social facebook">
              <Facebook className="h-4 w-4 text-white/40 hover:text-brand" />
            </a>
            <a href="#" aria-label="social twitter">
              <Twitter className="h-4 w-4 text-white/40 hover:text-brand" />
            </a>
            <a href="#" aria-label="social globe">
              <Globe className="h-4 w-4 text-white/40 hover:text-brand" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
