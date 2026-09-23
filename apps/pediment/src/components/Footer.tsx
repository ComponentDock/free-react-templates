import { Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const companyLinks = ['About Us', 'Services', 'Our Works', 'Career', 'FAQs'] as const
const serviceLinks = ['Architecture', 'Interior Design', 'Exterior Design', 'Planning'] as const

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Newsletter CTA */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-12 sm:flex-row">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready To Work With Us?
          </h2>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-brand px-5 text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Footer columns */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Contact */}
          <div>
            <a href="#home" className="mb-4 inline-block font-display text-xl font-bold text-white">
              Pediment
            </a>
            <p className="mb-4 text-sm text-footer-muted">
              7176 Blue Spring Lane
              <br />
              Santa Monica, CA 90403
            </p>
            <ul className="mb-4 space-y-2 text-sm text-footer-muted">
              <li>info@pediment.com</li>
              <li>+84 123 456 789</li>
            </ul>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-footer-muted transition-colors hover:text-brand"
              >
                <BrandIcon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-footer-muted transition-colors hover:text-brand"
              >
                <BrandIcon name="x" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-footer-muted transition-colors hover:text-brand"
              >
                <BrandIcon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-footer-muted transition-colors hover:text-brand"
              >
                <BrandIcon name="linkedin" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h6>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-footer-muted transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h6>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-footer-muted transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h6 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h6>
            <p className="mb-4 text-sm text-footer-muted">
              7176 Blue Spring Lane
              <br />
              Santa Monica, CA 90403
            </p>
            <ul className="space-y-2 text-sm text-footer-muted">
              <li>info@pediment.com</li>
              <li>+84 123 456 789</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-footer-muted">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-footer-muted transition-colors hover:text-brand">
              Terms of use
            </a>
            <a href="#" className="text-sm text-footer-muted transition-colors hover:text-brand">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
