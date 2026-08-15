import {
  componentDockName,
  componentDockUrl,
  footerAbout,
  footerColumns,
  footerExtraLinks,
  footerSocialTitle,
  siteName,
  tagline,
} from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['pinterest', 'facebook', 'twitter', 'dribbble', 'behance', 'linkedin']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact-section" className="bg-footer">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 lg:grid-cols-4 lg:py-[108px]">
        <div>
          <p className="text-[34px] font-medium leading-none text-brand">{siteName}</p>
          <p className="mt-2 text-xs text-meta">{tagline}</p>
          <p className="mt-6 text-sm leading-relaxed text-[#bbbbbb]">{footerAbout}</p>
        </div>
        {footerColumns.map((column, index) => (
          <nav key={index} aria-label={`Footer links ${index + 1}`}>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#home-section"
                    className="text-sm text-[#bbbbbb] transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm text-white/80">{footerSocialTitle}</p>
            <ul className="mt-3 flex items-center gap-6">
              {socials.map((name) => (
                <li key={name}>
                  <a
                    href="#home-section"
                    aria-label={name}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <BrandIcon name={name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex items-center gap-8">
            {footerExtraLinks.map((link) => (
              <li key={link}>
                <a
                  href="#home-section"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-footer-extra">
          <p className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-[#bbbbbb]">
            Copyright © {year} All rights reserved | This template is made with ♥ by{' '}
            <a
              href={componentDockUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline-offset-2 hover:underline"
            >
              {componentDockName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
