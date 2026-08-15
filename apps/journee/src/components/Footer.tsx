import { useState } from 'react'
import { Globe, Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  componentDockName,
  componentDockUrl,
  footerAbout,
  footerNavLinks,
  instafeedImages,
  instafeedTitle,
  newsletterParagraph,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  socialLabel,
} from '../data'

const socialIcons = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'behance', label: 'Behance' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="footer-section" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-36 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-8 font-heading text-xl font-medium text-black">About Agency</h3>
            <p className="text-[15px] leading-[1.8] text-muted">{footerAbout}</p>
          </div>
          <nav aria-label="Navigation Links">
            <h3 className="mb-8 font-heading text-xl font-medium text-black">Navigation Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerNavLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home-section"
                    className="text-sm capitalize text-muted transition-colors hover:text-sky"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="mb-8 font-heading text-xl font-medium text-black">Newsletter</h3>
            <p className="text-[15px] leading-[1.8] text-muted">{newsletterParagraph}</p>
            <form
              className="relative mt-6"
              onSubmit={(event) => {
                event.preventDefault()
                setEmail('')
              }}
            >
              <label htmlFor="journee-footer-email" className="sr-only">
                {newsletterPlaceholder}
              </label>
              <input
                id="journee-footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={newsletterPlaceholder}
                className="h-[40px] w-full border border-muted/40 px-4 pr-12 text-sm text-ink outline-none placeholder:text-muted focus:border-sky"
              />
              <button
                type="submit"
                aria-label={newsletterSubmitLabel}
                className="absolute right-0 top-0 flex h-[40px] w-[40px] items-center justify-center bg-sky text-white transition-colors hover:bg-ink"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div>
            <h3 className="mb-8 font-heading text-xl font-medium text-black">{instafeedTitle}</h3>
            <ul className="grid grid-cols-4 gap-1.5">
              {instafeedImages.map((image, index) => (
                <li key={index}>
                  <a href="#footer-section" className="block">
                    <img src={image} alt="" className="h-12 w-12 object-cover" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-muted/20">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-6 py-7 sm:flex-row lg:px-10">
          <p className="text-center font-sans text-sm text-fade sm:text-left">
            Copyright © 2026 All rights reserved | This template is made with ♥ by{' '}
            <a href={componentDockUrl} className="text-ink transition-colors hover:text-sky">
              {componentDockName}
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[0].label}`}
              className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-sky"
            >
              <BrandIcon name={socialIcons[0].name} className="h-3.5 w-3.5" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[1].label}`}
              className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-sky"
            >
              <BrandIcon name={socialIcons[1].name} className="h-3.5 w-3.5" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: Website`}
              className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-sky"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[2].label}`}
              className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-sky"
            >
              <BrandIcon name={socialIcons[2].name} className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
