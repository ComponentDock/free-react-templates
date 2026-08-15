import {
  componentDockName,
  componentDockUrl,
  footerBrand,
  footerCopyrightPrefix,
  footerCopyrightSuffix,
  footerSocialLabel,
  socialLinks,
} from '../data'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white">
      <div className="mx-auto flex h-auto max-w-[1200px] flex-col items-center justify-center gap-4 px-6 py-8 md:h-[129px] md:flex-row md:justify-between md:py-0">
        <span className="text-[30px] font-bold text-ink">{footerBrand}</span>
        <p className="text-sm text-ink">
          {footerCopyrightPrefix} {year} {footerCopyrightSuffix}{' '}
          <a
            href={componentDockUrl}
            className="font-semibold text-ink underline underline-offset-2 transition-colors hover:text-accent"
          >
            {componentDockName}
          </a>
        </p>
        <ul aria-label={footerSocialLabel} className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                className="text-ink transition-colors hover:text-accent"
              >
                <SocialIcon link={link} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
