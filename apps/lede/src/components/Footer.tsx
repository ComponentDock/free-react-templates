import { Heart } from 'lucide-react'
import {
  brandName,
  copyrightBrand,
  copyrightLine,
  copyrightPrefix,
  footerWidgets,
  imgUrl,
  instagramFeedTitle,
  instagramTiles,
} from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './icons'

const footerSocials = [
  { label: 'Facebook', Icon: FacebookIcon, href: '#facebook' },
  { label: 'Twitter', Icon: TwitterIcon, href: '#twitter' },
  { label: 'Dribbble', Icon: DribbbleIcon, href: '#dribbble' },
  { label: 'Behance', Icon: BehanceIcon, href: '#behance' },
] as const

const columnSpan = ['lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'] as const

export function Footer() {
  return (
    <footer className="bg-navy px-5 pb-10 pt-20 text-white md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {footerWidgets.map((widget, index) => (
            <div key={widget.title} className={columnSpan[index]}>
              <h4 className="mb-8 text-base font-semibold text-white">{widget.title}</h4>
              <ul className="flex flex-col gap-4">
                {widget.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm font-light text-body transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-3">
            <h4 className="mb-8 text-base font-semibold text-white">{instagramFeedTitle}</h4>
            <ul className="grid grid-cols-4 gap-0">
              {instagramTiles.map((tile) => (
                <li key={tile.seed}>
                  <a
                    href="#instagram"
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                  >
                    <img
                      src={imgUrl(tile.seed, 90, 90)}
                      alt={`${brandName} Instagram photo ${tile.seed}`}
                      className="h-16 w-full object-cover md:h-[90px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm font-light text-white">
            {copyrightPrefix} {new Date().getFullYear()} {copyrightLine}{' '}
            <Heart size={13} className="inline text-primary-600" aria-hidden="true" />{' '}
            {copyrightBrand}
          </p>
          <ul className="flex items-center gap-4">
            {footerSocials.map(({ label, Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="block text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
