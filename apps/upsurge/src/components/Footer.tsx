import { Rocket } from 'lucide-react'
import { footer, navLinks, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer widgets + bottom bar (reference `.footer-top-section` +
 *  `.footer-section`): about + socials, useful links, latest posts, then a
 *  bottom bar with site links and a copyright line crediting Component
 *  Dock. */
export function Footer() {
  return (
    <footer>
      <div className="bg-footer-top">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-3 lg:px-8">
          <div>
            <a href="#home" className="flex items-center gap-2 text-white">
              <Rocket className="h-8 w-8 text-primary-600" aria-hidden="true" />
              <span className="font-heading text-2xl font-semibold">Upsurge</span>
            </a>
            <p className="mt-6 text-sm leading-relaxed text-white/25">{footer.about}</p>
            <div className="mt-8 flex gap-4">
              {socials.map(({ label, name }) => (
                <a
                  key={label}
                  href="#home"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Usefull Links</h3>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footer.usefulLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-white/26 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-white">Latest Posts</h3>
            <ul className="mt-8 space-y-6">
              {footer.latestPosts.map(({ title, date, image }) => (
                <li key={title + date} className="flex gap-4">
                  <img
                    src={image}
                    alt=""
                    className="h-[60px] w-[80px] object-cover"
                    loading="lazy"
                  />
                  <div>
                    <a
                      href="#home"
                      className="text-sm leading-snug text-white/25 transition-colors hover:text-white"
                    >
                      {title}
                    </a>
                    <p className="mt-1 text-xs text-white/25">{date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-footer-bottom">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row lg:px-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="text-xs text-white/26 transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/25">
            Copyright © 2026 All rights reserved ·{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white/60 transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
