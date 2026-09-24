import { Search } from 'lucide-react'
import { breakingNews, navLinks, stockTicker } from '../data'

export function Header() {
  return (
    <header className="bg-dark-bg text-white" role="banner">
      {/* Top bar: Breaking news ticker + Stock ticker */}
      <div className="border-b border-white/10 px-4 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden text-sm">
            <span className="shrink-0 bg-brand px-2 py-0.5 text-xs font-bold uppercase">
              Breaking
            </span>
            <div className="overflow-hidden">
              <p className="animate-[marquee_20s_linear_infinite] whitespace-nowrap text-white/80">
                {breakingNews.map((item, i) => (
                  <span key={item}>
                    {i > 0 && <span className="mx-4 text-white/40">|</span>}
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-xs md:flex">
            {stockTicker.map((stock) => (
              <span key={stock.symbol} className="text-white/70">
                <span className="font-medium text-white">{stock.symbol}</span> {stock.value}{' '}
                <span className="text-green-400">{stock.change}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Middle bar: Logo + Ad banner */}
      <div className="px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            NewsClip
          </a>
          <div className="hidden h-[90px] w-[728px] items-center justify-center border border-white/20 bg-white/5 text-sm text-white/50 md:flex">
            Advertisement 728×90
          </div>
        </div>
      </div>

      {/* Bottom bar: Navigation + Search */}
      <nav aria-label="Primary" className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <ul className="flex items-center gap-1 overflow-x-auto" role="menubar">
            {navLinks.map((link) => (
              <li key={link} role="none">
                <a
                  href={`#${link.toLowerCase()}`}
                  role="menuitem"
                  className="block px-3 py-3 text-[13px] font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Search"
            className="p-3 text-white/60 transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}
