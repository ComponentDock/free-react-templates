import { tickerHeadlines, tickerLabel } from '../data'

/** Breaking-news bar: pink "Trending" label box beside a CSS-animated
    marquee of headlines (reference: .breaking-news-area + #breakingNewsTicker). */
export function Ticker() {
  return (
    <div className="bg-mist">
      <div className="mx-auto flex max-w-7xl items-stretch px-4">
        <div className="flex items-center bg-accent px-4 text-white">
          <p className="text-xs font-extrabold tracking-widest uppercase">{tickerLabel}</p>
        </div>
        <div className="relative flex-1 overflow-hidden" aria-label="Breaking news headlines">
          <ul className="animate-ticker flex w-max items-center gap-16 py-3 pl-8">
            {[...tickerHeadlines, ...tickerHeadlines].map((headline, index) => (
              <li key={`${headline}-${index}`}>
                <a
                  href="#news"
                  className="text-sm font-medium whitespace-nowrap text-inklight transition-colors hover:text-accent"
                >
                  {headline}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
