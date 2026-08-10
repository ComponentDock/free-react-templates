import { BrandIcon } from './BrandIcon'
import {
  brandName,
  footerCopyright,
  imgUrl,
  instagramFollowers,
  instagramHandle,
  instagramHeading,
  instagramTiles,
  socialLabels,
  socialLinks,
} from '../data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-soft">
      {/* Instagram strip */}
      <section aria-label={instagramHeading} className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="flex items-center justify-center gap-3">
          <img
            src={imgUrl('savor-avatar', 60, 60)}
            alt=""
            className="h-[60px] w-[60px] rounded-full object-cover"
          />
          <div>
            <h2 className="font-serif text-lg font-bold text-ink">{instagramHandle}</h2>
            <p className="text-xs font-bold uppercase tracking-[2px] text-meta">
              {instagramFollowers}
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-1 md:grid-cols-6">
          {instagramTiles.map((seed) => (
            <img
              key={seed}
              src={imgUrl(seed, 300, 305)}
              alt=""
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Footer text: wordmark + social */}
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
        <a href="#home" className="inline-block">
          <h2 className="font-serif text-4xl font-bold italic text-ink transition-colors hover:text-primary">
            {brandName}
          </h2>
        </a>
        <div className="mt-5 flex items-center justify-center gap-5">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#home"
              aria-label={socialLabels[name]}
              className="text-meta transition-colors hover:text-primary"
            >
              <BrandIcon name={name} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-sm text-meta">
          {`© ${year} ${brandName}. ${footerCopyright}`}
        </p>
      </div>
    </footer>
  )
}
