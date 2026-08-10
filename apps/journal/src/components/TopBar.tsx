import { useEffect, useState } from 'react'
import { headerSocials, tickerHeadlines, tickerLabel, tickerRotateMs } from '../data'
import { BrandIcon } from './BrandIcon'

/** Thin white top bar: auto-rotating breaking-news ticker left, six social
 *  icons right — mirrors the original's top-header. */
export function TopBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % tickerHeadlines.length),
      tickerRotateMs,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="border-b border-hairline bg-white">
      <div className="mx-auto flex h-[65px] max-w-6xl items-center justify-between px-4 lg:px-6">
        <p className="flex min-w-0 items-center gap-3">
          <span className="bg-nearblack px-2 py-[3px] text-[10px] font-bold uppercase tracking-[2px] text-white">
            {tickerLabel}
          </span>
          <span className="truncate text-[13px] font-semibold text-ink transition-colors hover:text-accent">
            {tickerHeadlines[active]}
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-1">
          {headerSocials.map((social) => (
            <BrandIcon key={social.name} name={social.name} label={social.label} className="p-2" />
          ))}
        </div>
      </div>
    </div>
  )
}
