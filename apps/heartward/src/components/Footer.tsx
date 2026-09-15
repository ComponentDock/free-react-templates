import { Mail, Phone, MapPin } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon } from './social-icons'
import { contactInfo, footerAbout } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{footerAbout}</p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/60 transition-colors hover:text-primary"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/60 transition-colors hover:text-primary"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/60 transition-colors hover:text-primary"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Skype"
              className="text-white/60 transition-colors hover:text-primary"
            >
              <SkypeIcon />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href="#home" className="transition-colors hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="transition-colors hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#causes" className="transition-colors hover:text-primary">
                Causes
              </a>
            </li>
            <li>
              <a href="#events" className="transition-colors hover:text-primary">
                Events
              </a>
            </li>
            <li>
              <a href="#blog" className="transition-colors hover:text-primary">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-white">Newsletter</h2>
          <p className="mt-4 text-sm text-white/60">
            Stay updated with our latest news and fundraising campaigns.
          </p>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email Address"
              aria-label="Email address"
              className="flex-1 rounded-l border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="rounded-r bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-600"
            >
              &rarr;
            </button>
          </form>
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-white">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo[0]}, {contactInfo[1]}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo[2]}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo[3]}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-sm font-light text-white/50">
          <p>Copyright &copy; {year} All rights reserved</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-primary"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
