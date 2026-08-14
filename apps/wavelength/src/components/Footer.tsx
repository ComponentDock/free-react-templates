import { Play } from 'lucide-react'
import { footerNavPrimary, footerNavSecondary, socialIcons } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  return (
    <footer className="bg-footer py-16 text-footer-muted">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="relative mb-4 inline-block pb-2 text-sm uppercase tracking-[0.1em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand">
              About Wavelength
            </h3>
            <p className="max-w-xs leading-relaxed">
              An independent online radio station streaming music, talk, and live sessions around
              the clock — free for every listener.
            </p>
          </div>

          <div>
            <h3 className="relative mb-4 inline-block pb-2 text-sm uppercase tracking-[0.1em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand">
              Navigations
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                {footerNavPrimary.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-sm">
                {footerNavSecondary.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="relative mb-4 mt-8 inline-block pb-2 text-sm uppercase tracking-[0.1em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  aria-label={icon.label}
                  className="text-footer-link transition-colors hover:text-brand"
                >
                  <BrandIcon name={icon.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="relative mb-4 inline-block pb-2 text-sm uppercase tracking-[0.1em] text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand">
              Watch Live Streaming
            </h3>
            <figure className="relative mt-4">
              <img
                src="https://picsum.photos/seed/wavelength-live/600/400"
                alt="Live streaming thumbnail"
                className="w-full rounded"
              />
              <a
                href="#"
                aria-label="Watch live stream"
                className="absolute left-1/2 top-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Play className="h-6 w-6 fill-current" aria-hidden="true" />
              </a>
            </figure>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Wavelength. All rights reserved. · Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-brand-hover"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
