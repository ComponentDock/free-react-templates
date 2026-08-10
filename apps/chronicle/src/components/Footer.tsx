import { Heart } from 'lucide-react'
import { footerLegalLinks, footerSocials, socialLabels } from '../data'
import { BrandIcon } from './BrandIcon'

/**
 * Centered footer — social icons (Facebook, Twitter, Linkedin, YouTube),
 * copyright line with a heart, legal links. Mirrors `div.site-footer` in
 * the original (padding-top 70px / bottom 30px, centered text).
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pt-[70px] pb-[30px] text-center sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-4">
          {footerSocials.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={socialLabels[name]}
              className="text-ink transition-colors hover:text-brand"
            >
              <BrandIcon name={name} className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-1 text-[15px] text-meta/70">
          Copyright © {year} All rights reserved | This template is made with
          <Heart className="h-3.5 w-3.5 fill-[#dc3545] text-[#dc3545]" aria-label="love" />
          by Colorlib
        </p>
        <div className="mt-4 flex items-center justify-center gap-5">
          {footerLegalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[15px] text-ink transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
