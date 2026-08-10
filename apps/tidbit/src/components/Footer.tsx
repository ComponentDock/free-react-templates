import { Heart } from 'lucide-react'
import {
  brandName,
  connectHeading,
  footerAboutHeading,
  footerAboutText,
  footerCategoryLinks,
  footerNavLinks,
  socials,
} from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark (#333) footer: About Us, two link columns, socials, copyright. */
export function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-6 lg:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="mb-4 text-base font-bold text-white">{footerAboutHeading}</h3>
            <p className="text-sm leading-relaxed text-[#737373]">{footerAboutText}</p>
          </div>
          <div className="md:col-span-3 md:ml-auto">
            <div className="flex gap-8">
              <ul className="space-y-2.5">
                {footerNavLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-[#999999] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {footerCategoryLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-[#999999] transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-5">
            <h3 className="mb-4 text-base font-bold text-white">{connectHeading}</h3>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#top"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-[#737373]">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <Heart className="inline h-3.5 w-3.5 text-red-500" aria-hidden="true" /> by {brandName}
          </p>
        </div>
      </div>
    </footer>
  )
}
