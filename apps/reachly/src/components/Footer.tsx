import { Mail, Phone, Zap } from 'lucide-react'
import { footer, siteName } from '../data'

/* Brand icons were removed from lucide-react; inline SVG paths are used
   instead (same 24x24 brand glyphs used across sibling apps). */
const SOCIAL_PATHS: Record<string, string> = {
  Facebook:
    'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Twitter:
    'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  Instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
}

const socialIcons = ['Facebook', 'Twitter', 'Instagram'] as const

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return (
    <div>
      <h4 className="font-heading text-xl font-semibold text-footer-heading">{title}</h4>
      <ul className="mt-6 space-y-3">
        {links.map((label) => (
          <li key={label}>
            <a
              href="#home"
              className="text-base text-footer-text transition-colors hover:text-brand hover:underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* Footer (source: div.footer-wrapper → five columns — about, Navigation,
   Services, Support, Contact Us — plus a centered copyright bar). The
   original "made with ♥" credit line is replaced by the mandatory
   Component Dock link. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1200px] px-[15px] pt-[100px]">
        <div className="grid gap-10 pb-[50px] md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2 font-heading text-2xl font-bold text-footer-heading"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-brand to-brand-dark text-white"
                aria-hidden="true"
              >
                <Zap className="h-5 w-5" />
              </span>
              {siteName}
            </a>
            <p className="mt-5 max-w-xs text-base leading-[1.8] text-footer-text">{footer.blurb}</p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((label) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-footer-text transition-colors hover:border-brand hover:text-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d={SOCIAL_PATHS[label]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title={footer.navigationTitle} links={footer.navigationLinks} />
          <FooterColumn title={footer.servicesTitle} links={footer.linkColumns} />
          <FooterColumn title={footer.supportTitle} links={footer.linkColumns} />

          <div>
            <h4 className="font-heading text-xl font-semibold text-footer-heading">
              {footer.contactTitle}
            </h4>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="flex items-center gap-3 text-base text-footer-text transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.phone.replace(/[^\d+]/g, '')}`}
                  className="flex items-center gap-3 text-base text-footer-text transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 py-6 text-center">
          <p className="text-sm text-footer-text">
            Copyright © {year} {footer.rights} | {footer.madeWith}{' '}
            <a
              href={footer.componentDockHref}
              className="text-brand transition-colors hover:underline"
            >
              {footer.componentDockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
