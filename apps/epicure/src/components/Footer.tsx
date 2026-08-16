import { Heart } from 'lucide-react'
import { footer } from '../data'

/** Dark indigo footer: About us / Links / Our Menu / Opening Hours
 *  columns, white links with an animated underline, and a copyright
 *  bar crediting Component Dock (repo convention). */
export function Footer() {
  return (
    <footer id="contact" aria-label="Footer" className="bg-primary px-6 pb-8 pt-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-12">
        <div className="xl:col-span-3">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            About us
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/50">{footer.blurb}</p>
          <a
            href={footer.readMore.href}
            className="group relative mt-4 inline-block pb-0.5 text-sm font-medium text-white"
          >
            {footer.readMore.label}
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="xl:col-span-2 xl:col-start-5">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            {footer.linksColumn.heading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footer.linksColumn.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative inline-block pb-0.5 text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:col-span-2">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            {footer.menuColumn.heading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footer.menuColumn.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative inline-block pb-0.5 text-sm text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:col-span-3 xl:col-start-10">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
            {footer.hoursColumn.heading}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footer.hoursColumn.rows.map((row) => (
              <li key={row.days} className="text-sm text-white/50">
                <span className="block font-medium text-white/70">{row.days}</span>
                {row.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-6 text-center text-sm text-white/50">
        <p>
          Copyright © {new Date().getFullYear()} All rights reserved | {footer.copyright}{' '}
          <Heart className="inline h-3.5 w-3.5 fill-white/60 text-white/60" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white underline-offset-4 transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
