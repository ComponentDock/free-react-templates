import type { ReactNode } from 'react'
import {
  ADDRESS,
  BRAND,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  PHONE_DISPLAY,
  PHONE_HREF,
  PRIVACY_HREF,
  TERMS_HREF,
} from '../content'
import { ActionLink, Container, Logo } from './ui'

/** Brand marks are authored inline — the icon library ships none of them. */
const SOCIAL_GLYPHS: Record<string, ReactNode> = {
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  ),
  instagram: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" />
    </>
  ),
  facebook: (
    <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v2.8h2.5V21h3Z" />
  ),
}

function SocialGlyph({ id }: { readonly id: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      {SOCIAL_GLYPHS[id]}
    </svg>
  )
}

/**
 * Dark footer: brand column, three link columns, the water-testing column with
 * its sage pill, and a legal bar that carries the Component Dock line.
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24 dark:bg-gray-950">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Logo brand={BRAND} tone="light" className="h-10" />
          <p className="mt-4 max-w-xs text-base leading-6 text-gray-400">{FOOTER.blurb}</p>

          <div className="mt-6 flex gap-2">
            {FOOTER.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <SocialGlyph id={social.id} />
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-1 text-base leading-6 text-gray-400">
            <p>{ADDRESS}</p>
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold uppercase leading-5 tracking-[0.05em] text-white">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-base text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase leading-5 tracking-[0.05em] text-white">
            {FOOTER.promiseHeading}
          </h3>
          <p className="mt-4 text-base leading-6 text-gray-400">{FOOTER.promiseBody}</p>
          <ActionLink href="#quiz" size="sm" className="mt-4">
            {FOOTER.promiseCta}
          </ActionLink>
        </div>
      </Container>

      <Container className="mt-16 border-t border-gray-800 py-8">
        <div className="flex flex-col gap-3 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER.legal}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={PRIVACY_HREF} className="transition-colors hover:text-white">
              {FOOTER.privacy}
            </a>
            <a href={TERMS_HREF} className="transition-colors hover:text-white">
              {FOOTER.terms}
            </a>
            <a href={COMPONENTDOCK_HREF} rel="noreferrer" className="transition-colors hover:text-white">
              {FOOTER.componentDock}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
