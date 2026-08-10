import { Heart } from 'lucide-react'
import { brandName, colorlibLabel, creditBrand, creditPrefix } from '../data'
import { SocialLinks } from './SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-40 pb-16 text-footer">
      <div className="mx-auto flex max-w-[1170px] flex-col items-center gap-10 px-6 md:flex-row md:justify-between">
        <div className="md:w-2/5">
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noreferrer"
            className="text-base text-footer transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            {colorlibLabel}
          </a>
        </div>
        <p className="font-display text-2xl font-semibold uppercase tracking-[0.2em] text-cream">
          {brandName}
        </p>
        <div className="md:w-2/5">
          <SocialLinks />
        </div>
      </div>

      <div className="mt-14 text-center text-sm">
        <p>
          {brandName} © {year}. {creditPrefix}{' '}
          <Heart className="inline h-3 w-3 fill-heart text-heart" aria-hidden="true" /> by{' '}
          {creditBrand}
        </p>
      </div>
    </footer>
  )
}
