import { Mail, Phone, MapPin } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon } from './social-icons'
import { footerAbout, contactInfo, services } from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-footer-bg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <h2 className="font-heading text-xl text-ink">Kindfund</h2>
          <p className="mt-4 text-sm leading-relaxed text-body">{footerAbout}</p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-body/60 transition-colors hover:text-primary"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-body/60 transition-colors hover:text-primary"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-body/60 transition-colors hover:text-primary"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Skype"
              className="text-body/60 transition-colors hover:text-primary"
            >
              <SkypeIcon />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-heading text-xl text-ink">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-body">
            {services.map((svc) => (
              <li key={svc}>
                <a href="#" className="transition-colors hover:text-primary">
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl text-ink">Contacts</h2>
          <ul className="mt-4 space-y-3 text-sm text-body">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo.phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              {contactInfo.address}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-xl text-ink">Top News</h2>
          <ul className="mt-4 space-y-4 text-sm text-body">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                How Your Donations Changed Lives
              </a>
              <p className="mt-1 text-xs text-muted">May 10, 2024</p>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Volunteer Spotlight: Stories from the Field
              </a>
              <p className="mt-1 text-xs text-muted">May 8, 2024</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/20 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-sm text-body">
          <p>Copyright &copy; {year} All rights reserved</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-primary transition-colors hover:text-primary-600"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
