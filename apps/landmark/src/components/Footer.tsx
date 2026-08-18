import { MapPin } from 'lucide-react'
import { FOOTER_COLUMNS, FOOTER_PEREX } from '../data'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const SOCIALS = [
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Linkedin', icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer>
      <div className="bg-white pt-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 pb-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-2xl font-semibold text-ink">
              <MapPin className="h-6 w-6 text-brand" aria-hidden="true" />
              Landmark
            </a>
            <p className="mt-4 max-w-xs text-base font-light text-muted">{FOOTER_PEREX}</p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-ink transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-lg font-medium text-ink">{column.title}</h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link} className="text-base font-light text-muted">
                    {column.title === 'Contact Us' ? (
                      link
                    ) : (
                      <a href="#" className="transition-colors hover:text-brand">
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-footer-bg">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-muted sm:flex-row">
          <p>© 2026 Landmark. All rights reserved.</p>
          <p>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
