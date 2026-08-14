import { Heart } from 'lucide-react'
import { brand, footer, socials } from '../data'
import { BrandIcon } from './BrandIcon'

/** Footer (source: div.footer-area.footer-bg, bg #121212): about column with
 *  the wordmark and blurb, Navigation + Useful Links columns, an Instagram
 *  Feed 3×2 thumbnail grid, and a bottom bar with the neutral copyright,
 *  the Follow Us social row and the Component Dock credit. */
export function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-[80px] text-white lg:pt-[150px]">
      <div className="mx-auto max-w-[1400px] px-[15px] lg:px-[30px]">
        <div className="grid gap-12 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="font-heading text-2xl font-bold uppercase tracking-[0.15em]"
              aria-label="Exposure"
            >
              {brand.name}
            </a>
            <p className="mt-5 pr-[74px] text-base leading-[1.8]">{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.heading} className="lg:col-span-2">
              <h2 className="mb-[38px] font-heading text-lg uppercase">{column.heading}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#footer"
                      className="font-light text-footlink transition-all hover:pl-[5px] hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h2 className="mb-[38px] font-heading text-lg uppercase">Instagram Feed</h2>
            <ul className="grid grid-cols-3 gap-2">
              {footer.instagram.map((image) => (
                <li key={image} className="mb-[10px]">
                  <img src={image} alt="" className="h-20 w-full object-cover" loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm lg:flex-row">
          <p className="text-footlink">
            Copyright © {new Date().getFullYear()}. All rights reserved | Made with{' '}
            <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by {brand.name}
          </p>
          <div className="flex items-center gap-5">
            <span className="uppercase tracking-wider text-social">Follow Us</span>
            {socials.map((social) => (
              <a
                key={social}
                href="#footer"
                aria-label={social}
                className="text-social transition-colors hover:text-white"
              >
                <BrandIcon name={social} />
              </a>
            ))}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 transition-colors hover:text-white"
            >
              More templates at Component Dock
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
