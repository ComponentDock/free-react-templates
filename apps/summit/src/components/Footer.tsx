import { BRAND, CONTACT_INFO, FOOTER_SOCIALS, GALLERY_IMAGES, WORKSHOP_LINKS } from '../data'
import { BrandIcon } from './BrandIcon'

/* Footer recreated from the source's footer area: four columns (About,
   Contact, Workshops, Gallery) on the deep navy surface with a copyright
   bar. The credit line links the Component Dock marketplace per repo
   convention. */

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold uppercase tracking-wide text-white"
              aria-label="Summit home"
            >
              {BRAND}
            </a>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Three days of keynotes, workshops and networking for product teams. Join us in Phoenix
              this January for the conference of the year.
            </p>
            <div className="mt-6 flex gap-3">
              {FOOTER_SOCIALS.map((social) => (
                <a
                  key={social.network}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-tab-active hover:text-white"
                >
                  <BrandIcon name={social.network} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">Contact</h5>
            <ul className="space-y-3 text-sm text-muted">
              {CONTACT_INFO.map((info) => (
                <li key={info.label}>
                  {info.label}: {info.value}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">Workshops</h5>
            <ul className="space-y-3 text-sm">
              {WORKSHOP_LINKS.map((link) => (
                <li key={link}>
                  <a href="#schedule" className="text-muted transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">Gallery</h5>
            <div className="grid grid-cols-3 gap-2">
              {GALLERY_IMAGES.map((image, i) => (
                <a key={image} href="#speakers" aria-label={`Gallery image ${i + 1}`}>
                  <img src={image} alt="" className="h-16 w-16 object-cover" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>
            Copyright © {year} All rights reserved | made with <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#home" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
