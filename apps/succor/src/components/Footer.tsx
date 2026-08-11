import { Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT_ROWS, FOOTER_BLURB, FOOTER_INFORMATION_LINKS, FOOTER_LINKS } from '../data'

/* Brand social icons — lucide-react removed brand icons, so these are
   inline SVG paths (simple-icons style), recreated by hand. */
const SOCIALS = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
] as const

const linkClass = 'block py-2 text-[16px] text-white/40 transition-colors hover:text-white'

/* footer.ftco-footer — #1e1e1e background, 4 widgets in a row on desktop
   (stacking on mobile) + a centered bottom bar with the © line and a
   reworded credit (Component Dock — no Colorlib link-back). */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-coal py-[7em] text-[16px]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        {/* a) brand + blurb + social icons */}
        <div>
          <h2 className="mb-10 text-[24px] font-black text-white">
            Succor<span className="text-brand">.</span>
          </h2>
          <p className="leading-relaxed text-white/70">{FOOTER_BLURB}</p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="block rounded-full border border-white/20 p-2 text-white transition-colors hover:bg-brand hover:border-brand"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* b) Information */}
        <div>
          <h3 className="mb-10 text-[17px] font-normal text-white">Information</h3>
          <ul>
            {FOOTER_INFORMATION_LINKS.map((label) => (
              <li key={label}>
                <a href="#home" className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* c) Links */}
        <div>
          <h3 className="mb-10 text-[17px] font-normal text-white">Links</h3>
          <ul>
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <a href="#home" className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* d) Have a Questions? — contact rows (address / phone / email) */}
        <div>
          <h3 className="mb-10 text-[17px] font-normal text-white">Have a Questions?</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white" />
              <span className="text-white/40">{CONTACT_ROWS.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white" />
              {/* tel: href computed at runtime (no redactable literal in
                  source). */}
              <a
                href={'tel:' + CONTACT_ROWS.phone.replace(/[^\d+]/g, '')}
                className="text-white/40 transition-colors hover:text-white"
              >
                {CONTACT_ROWS.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-white" />
              <a
                href={`mailto:${CONTACT_ROWS.email}`}
                className="text-white/40 transition-colors hover:text-white"
              >
                {CONTACT_ROWS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar — © line + reworded credit. */}
      <div className="mx-auto mt-10 max-w-6xl px-4 text-center">
        <p className="text-white/40">
          Copyright © {year} All rights reserved | This template is made with{' '}
          <span aria-hidden="true" className="text-brand">
            ♥
          </span>{' '}
          by Component Dock
        </p>
      </div>
    </footer>
  )
}
