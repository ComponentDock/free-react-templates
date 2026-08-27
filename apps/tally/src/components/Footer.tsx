import { Phone, ArrowRight } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './SocialIcons'
import { useState } from 'react'

const SERVICE_LINKS = [
  'Accounting',
  'Tax Planning',
  'Financial Advisory',
  'Payroll',
  'Business Consulting',
]
const DISCOVER_LINKS = ['About Us', 'Case Study', 'Blog', 'Careers', 'Contact']
const RESOURCE_LINKS = ['FAQs', 'Help Center', 'Terms of Service', 'Privacy Policy', 'Resources']

export function Footer() {
  const [consultEmail, setConsultEmail] = useState('')

  function handleConsultSubmit(e: React.FormEvent) {
    e.preventDefault()
    setConsultEmail('')
  }

  return (
    <footer className="bg-dark text-white/60 pt-16" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* About column */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-white">Tally</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICE_LINKS.map((link) => (
              <li key={link}>
                <a href="#services" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Discover column */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Discover</h3>
          <ul className="space-y-2 text-sm">
            {DISCOVER_LINKS.map((link) => (
              <li key={link}>
                <a href="#about" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources column */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            {RESOURCE_LINKS.map((link) => (
              <li key={link}>
                <a href="#faq" className="hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Free Consultation */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <Phone size={20} className="text-brand" />
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40">Free Consultation</p>
              <a
                href="tel:+1234567890"
                className="text-white font-semibold hover:text-brand transition-colors"
              >
                +1 234 567 890
              </a>
            </div>
          </div>
          <form onSubmit={handleConsultSubmit} className="flex w-full max-w-md gap-2">
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              value={consultEmail}
              onChange={(e) => setConsultEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-brand p-2 text-white hover:bg-brand-dark transition-colors"
              aria-label="Send"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6 text-center text-xs">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <span className="text-red-500">&hearts;</span>{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
