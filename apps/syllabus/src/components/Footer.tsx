import { Mail } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const menuLinks = ['Home', 'About Us', 'Courses', 'Elements', 'News', 'Contact']
const usefulLinks = ['Pricing', 'FAQ', 'Blog', 'Community', 'Support']

export function Footer() {
  return (
    <footer className="bg-dark-bg" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-gray-600 px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 font-heading text-2xl font-bold text-white">
            Subscribe to Newsletter
          </h2>
          <p className="mb-6 text-gray-400">Get the latest updates and offers</p>
          <form className="mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded bg-white/10 px-4 py-3 pl-10 text-sm text-white placeholder-gray-400"
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              className="rounded bg-brand px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Columns */}
      <div className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-white">Syllabus</h3>
            <p className="text-sm text-gray-400">
              Empowering learners worldwide with quality education and expert-led courses.
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-white">Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-white">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-bold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Education St, Learning City</li>
              <li>
                <a href="tel:+1234567890" className="transition-colors hover:text-brand">
                  +123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:info@syllabus.com" className="transition-colors hover:text-brand">
                  info@syllabus.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 px-4 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Syllabus. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
