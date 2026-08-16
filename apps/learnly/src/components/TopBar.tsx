import { Clock, Phone } from 'lucide-react'
import { brand, topBar } from '../data'
import { BrandIcon } from './BrandIcon'

export function TopBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 px-6 py-4 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a
          href="#home"
          className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <span className="block text-2xl font-medium text-white">{brand.name}</span>
          <span className="mt-1 block text-[11px] uppercase tracking-[2px] text-white/90">
            {brand.tagline}
          </span>
        </a>

        {/* Hours, call and socials are display:none below the lg breakpoint
            (source: .con and .top-social hidden <992px) — brand stays. */}
        <div data-topbar-meta className="hidden items-center gap-10 text-white lg:flex">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm leading-tight">
              <span className="block">{topBar.hoursLabel}</span>
              <strong className="font-semibold">{topBar.hoursValue}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm leading-tight">
              <span className="block">{topBar.callLabel}</span>
              <strong className="font-semibold">{topBar.phoneDisplay}</strong>
            </span>
          </div>

          <ul className="hidden items-center gap-2 lg:flex" data-topbar-meta>
            {topBar.socials.map((social) => (
              <li key={social}>
                <a
                  href={`#${social}`}
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <BrandIcon name={social} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
