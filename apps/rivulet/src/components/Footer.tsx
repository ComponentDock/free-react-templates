import { ArrowUp, Heart } from 'lucide-react'
import { footerSocials, madeWithText, socialLabels } from '../data'
import { BrandIcon } from './BrandIcon'
import { DropletLogo } from './DropletLogo'

/** Near-black footer: copyright bar with pulsing coral heart + social links. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">
        <a
          href="#"
          aria-label="Rivulet footer logo"
          className="transition-opacity hover:opacity-80"
        >
          <DropletLogo className="h-14 w-14 border-[10px] border-white" />
        </a>
        <p className="max-w-xl font-sans text-sm text-muted">
          © {year} {madeWithText}{' '}
          <Heart
            className="animate-heart-pulse inline h-3.5 w-3.5 text-accent"
            fill="currentColor"
            aria-hidden="true"
          />{' '}
          by{' '}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-colors hover:text-white"
          >
            Colorlib
          </a>
        </p>
        <ul className="flex items-center gap-5">
          {footerSocials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="text-white transition-colors hover:text-accent"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        aria-label="Back to top"
        className="fixed right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </a>
    </footer>
  )
}
