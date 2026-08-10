import { BrandIcon } from './BrandIcon'
import {
  brandName,
  footerCopyright,
  footerCredit,
  imgUrl,
  navLinks,
  socialLabels,
  socialLinks,
  tagline,
} from '../data'

export function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-900">
      <img
        src={imgUrl('feast-footer', 1600, 900)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <a href="#home" className="inline-flex flex-col leading-none">
          <span className="text-3xl font-bold text-white">{brandName}</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[3px] text-social">
            {tagline}
          </span>
        </a>

        <div className="mt-6 flex items-center justify-center gap-6">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#home"
              aria-label={socialLabels[name]}
              className="text-social transition-colors hover:text-primary"
            >
              <BrandIcon name={name} className="h-5 w-5" />
            </a>
          ))}
        </div>

        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2"
        >
          {navLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-3 py-1 text-sm font-medium text-white/80 transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mx-auto mt-8 max-w-md border-t border-white/20 pt-6">
          <p className="text-xs text-white/60">{footerCopyright}</p>
          <p className="mt-1 text-xs text-white/60">{footerCredit}</p>
        </div>
      </div>
    </footer>
  )
}
