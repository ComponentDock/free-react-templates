import { Heart, ArrowRight } from 'lucide-react'
import { footer, socials } from '../data'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer id="contact" className="bg-footer pt-20 pb-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="text-white/70 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="mt-5 space-y-3">
            {footer.features.map((item) => (
              <li key={item}>
                <a href="#features" className="text-white/70 transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-5 space-y-3">
            {footer.resources.map((item) => (
              <li key={item}>
                <a href="#home" className="text-white/70 transition-colors hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <ul className="mt-5 flex items-center gap-3">
            {socials.map(({ label, icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand hover:text-black"
                >
                  <SocialIcon name={icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              {footer.newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="flex-1 rounded-l-[3px] bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none"
            />
            <button
              type="submit"
              aria-label={footer.newsletter.buttonLabel}
              className="rounded-r-[3px] bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 px-4 pt-8">
        <p className="text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-brand" aria-hidden="true" /> at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
