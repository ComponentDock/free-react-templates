import { Heart } from 'lucide-react'
import { brand, footer } from '../data'

/** Dark charcoal footer: about widget with brand + blurb + hiring button,
 *  four link columns, and a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 lg:px-8 lg:pt-[110px]">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:border-r lg:border-white/15 lg:pr-8">
            <a href="#home" className="leading-tight" aria-label="Estately">
              <span className="block text-xl font-bold uppercase tracking-[0.18em]">
                {brand.name}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.42em] text-white/70">
                {brand.tagline}
              </span>
            </a>
            <p className="mt-5 text-[15px] leading-7 text-white/70">{footer.blurb}</p>
            <a
              href="#hiring"
              className="mt-7 inline-block bg-brand px-8 py-3 font-heading text-base font-bold uppercase text-white transition-colors hover:bg-primary-700"
            >
              we are hiring
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8 lg:pl-8">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h2 className="font-heading text-lg font-medium text-white">{column.heading}</h2>
                <ul className="mt-4 space-y-[13px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#footer"
                        className="text-base text-white/70 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-8 text-xs uppercase tracking-wider text-copyright sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()}. All rights reserved | Made with{' '}
            <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by Estately
          </p>
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            More templates at Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
