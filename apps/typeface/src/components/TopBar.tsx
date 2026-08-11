import { Search } from 'lucide-react'
import { socialLabels, topBarSearchLabel, topBarSearchPlaceholder, topBarSocials } from '../data'
import { SocialIcon } from './SocialIcon'

/* Purple utility bar (reference `div.top-bar`, bg #6610f2): social icons at
   50% white opacity on the left, dark-purple search field on the right. */
export function TopBar() {
  return (
    <div className="bg-brand px-4 py-2.5">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-4">
        <ul className="flex items-center gap-1.5">
          {topBarSocials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="block p-1.5 text-white/50 transition-opacity hover:text-white hover:opacity-100"
              >
                <SocialIcon name={name} className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <form className="relative" role="search" aria-label={topBarSearchLabel}>
          <Search
            className="absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-white/70"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder={topBarSearchPlaceholder}
            aria-label={topBarSearchLabel}
            className="w-[150px] border-none bg-brand-dark py-1 pr-8 pl-3.5 text-sm text-white placeholder:text-white/60 focus:bg-brand-darker focus:outline-none sm:w-[300px]"
          />
        </form>
      </div>
    </div>
  )
}
