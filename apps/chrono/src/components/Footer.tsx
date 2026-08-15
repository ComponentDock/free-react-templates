import { Globe } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  componentDockName,
  componentDockUrl,
  copyrightPrefix,
  footerAbout,
  footerColumns,
  socialLabel,
} from '../data'

const socialIcons = [
  { name: 'twitter', label: 'Twitter' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'behance', label: 'Behance' },
] as const

export function Footer() {
  return (
    <footer id="footer-section" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 pt-24 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-sans text-3xl font-bold text-black">
              <span className="text-black">{'Chron'}</span>
              <span className="text-brand">{'o'}</span>
            </p>
            <p className="mt-6 max-w-xs text-base leading-[1.8] text-muted">{footerAbout}</p>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-6 font-body text-xl font-medium text-black">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#footer-section"
                      className="text-base text-[#777] transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-herobg">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-10">
          <p className="text-center font-sans text-sm font-semibold text-[#777] sm:text-left">
            {copyrightPrefix}{' '}
            <a href={componentDockUrl} className="text-ink transition-colors hover:text-brand">
              {componentDockName}
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[0].label}`}
              className="flex h-10 w-10 items-center justify-center text-[#777] transition-colors hover:text-brand"
            >
              <BrandIcon name={socialIcons[0].name} className="h-4 w-4" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[1].label}`}
              className="flex h-10 w-10 items-center justify-center text-[#777] transition-colors hover:text-brand"
            >
              <BrandIcon name={socialIcons[1].name} className="h-4 w-4" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: ${socialIcons[2].label}`}
              className="flex h-10 w-10 items-center justify-center text-[#777] transition-colors hover:text-brand"
            >
              <BrandIcon name={socialIcons[2].name} className="h-4 w-4" />
            </a>
            <a
              href="#footer-section"
              aria-label={`${socialLabel}: Website`}
              className="flex h-10 w-10 items-center justify-center text-[#777] transition-colors hover:text-brand"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
