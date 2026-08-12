import { Heart } from 'lucide-react'
import {
  BRAND_NAME,
  CATEGORY_LINKS,
  CREDIT_BRAND,
  FOOTER_ABOUT,
  GALLERY_SEEDS,
  NEWSLETTER_TEXT,
  NEWSLETTER_TITLE,
  WORKING_HOURS,
} from '../data'

/**
 * Footer — four columns (source `footer.footer-area`, dark image bg): about
 * text + Working Hours, CATEGORY links, Our Gallery thumbnails, and a
 * Newsletter form, with the repo-standard copyright credit bar.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold">{BRAND_NAME}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{FOOTER_ABOUT}</p>
          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Working Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {WORKING_HOURS.map((slot) => (
              <li key={slot.days} className="flex justify-between gap-6">
                <span>{slot.days}</span>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Category">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">Category</h3>
          <ul className="mt-4 space-y-2">
            {CATEGORY_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-white/70 transition-colors hover:text-accent">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            Our Gallery
          </h3>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {GALLERY_SEEDS.map((seed) => (
              <li key={seed}>
                <img
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  alt=""
                  loading="lazy"
                  className="h-16 w-16 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
            {NEWSLETTER_TITLE}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{NEWSLETTER_TEXT}</p>
          <form
            className="mt-4 flex"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-l-[4px] bg-white px-4 text-sm text-ink outline-none placeholder:text-mist"
            />
            <button
              type="submit"
              className="rounded-r-[4px] bg-brand px-5 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-white/70">
          Copyright © {year} {BRAND_NAME}. All rights reserved. Made with{' '}
          <Heart className="inline h-3 w-3 fill-heart text-heart" aria-label="love" /> by{' '}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noreferrer"
            className="text-white underline transition-colors hover:text-accent"
          >
            {CREDIT_BRAND}
          </a>
        </p>
      </div>
    </footer>
  )
}
