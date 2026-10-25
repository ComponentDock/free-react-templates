import type { ReactNode } from 'react'
import {
  ADDRESS,
  BRAND,
  BRAND_NOTE,
  COMPONENTDOCK_HREF,
  EMAIL,
  FOOTER,
  LICENCE_BODY,
  LICENCE_LABEL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../content'
import { Container } from './ui'

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
  linkedin: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect x="6.4" y="10.2" width="2.4" height="7.2" />
      <circle cx="7.6" cy="7.6" r="1.3" />
      <path d="M11.6 17.4v-4.2c0-1.4 1-2.4 2.4-2.4s2.4 1 2.4 2.4v4.2h-2.4v-3.9a.9.9 0 0 0-1.8 0v3.9h-.6Z" />
    </>
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
 * Four columns of brand, three link columns as sub-columns of one cell, a
 * licence column and a legal bar that carries the Component Dock line. The
 * wordmark is redrawn here in white rather than tinted with filters.
 */
export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <span className="block font-serif text-2xl font-semibold leading-none text-white">
            {BRAND}
          </span>
          <span className="mt-1.5 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
            {BRAND_NOTE}
          </span>
          <p className="mt-4 text-gray-400">{FOOTER.blurb}</p>

          <div className="mt-6 flex gap-2">
            {FOOTER.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <SocialGlyph id={social.id} />
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-1 text-sm text-gray-400">
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
                <h3 className="text-sm font-semibold uppercase tracking-[0.05em] text-white">
                  {column.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <a
                        href={`#${link.id}`}
                        className="text-gray-400 transition-colors hover:text-white"
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
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-white">
            {LICENCE_LABEL}
          </p>
          <p className="mt-4 text-sm text-gray-400">{LICENCE_BODY}</p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center rounded-full bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Ring Sam
          </a>
        </div>
      </Container>

      <Container className="mt-16 border-t border-gray-800 py-8">
        <div className="flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER.legal}</p>
          <p>
            <a
              href={COMPONENTDOCK_HREF}
              className="transition-colors hover:text-white"
              rel="noreferrer"
            >
              {FOOTER.componentDock}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
