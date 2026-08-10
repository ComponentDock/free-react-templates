import { Heart } from 'lucide-react'
import { footerCopyright, footerCredit, footerCreditUrl, footerLinks, headerSocials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Centered footer: uppercase nav links, six social icons, and a copyright
 *  bar with a heart and the Colorlib credit (paraphrased). */
export function Footer() {
  return (
    <footer className="py-[60px] text-center">
      <nav aria-label="Footer" className="mx-auto max-w-6xl px-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link}>
              <a
                href="#top"
                className="text-[13px] uppercase tracking-wide text-body transition-colors hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6 flex items-center justify-center gap-2">
        {headerSocials.map((social) => (
          <BrandIcon
            key={social.name}
            name={social.name}
            label={social.label}
            className="p-2 text-[13px]"
          />
        ))}
      </div>
      <p className="mt-8 text-sm text-meta">
        <span>{footerCopyright}</span>{' '}
        <Heart className="inline h-3 w-3 text-accent" aria-hidden="true" /> by{' '}
        <a
          href={footerCreditUrl}
          className="font-semibold text-ink transition-colors hover:text-accent"
        >
          {footerCredit}
        </a>
      </p>
    </footer>
  )
}
