import { Heart } from 'lucide-react'
import {
  brandName,
  brandTagline,
  footerCopyright,
  footerCredit,
  footerCreditUrl,
  footerLinks,
} from '../data'

/** Dark navy centered footer: wordmark, nav links, social-free copyright line
 *  with a heart and a paraphrased Colorlib credit link. */
export function Footer() {
  return (
    <footer className="bg-navy py-14 text-center">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <a href="#home" className="inline-block">
          <span className="block text-2xl font-bold tracking-wide text-white">{brandName}</span>
          <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-white/60">
            {brandTagline}
          </span>
        </a>

        <nav aria-label="Footer" className="mt-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-xs font-semibold uppercase tracking-[1px] text-white/70 transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-xs text-white/50">
          {footerCopyright} <Heart className="inline h-3 w-3 text-accent" aria-hidden="true" />{' '}
          <a
            href={footerCreditUrl}
            className="font-semibold text-white/70 transition-colors hover:text-accent"
          >
            {footerCredit}
          </a>
        </p>
      </div>
    </footer>
  )
}
