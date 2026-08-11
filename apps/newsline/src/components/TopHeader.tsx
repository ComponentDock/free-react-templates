import { LogIn, Search } from 'lucide-react'
import {
  breakingNews,
  breakingNewsLabel,
  loginLabel,
  socialLinks,
  topSearchLabel,
  topSocialLabel,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Dark top utility bar (reference `.top-header-area`): "Breaking News:"
   label + scrolling ticker on the left, social icons + search + Login on
   the right. The ticker is a pure-CSS marquee (duplicated track). */
export function TopHeader() {
  return (
    <div className="border-b border-line bg-night">
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="shrink-0 font-display text-sm font-bold uppercase tracking-wide text-brand">
            {breakingNewsLabel}
          </span>
          <div
            className="relative min-w-0 flex-1 overflow-hidden"
            role="region"
            aria-label={breakingNewsLabel}
          >
            <ul className="newsline-ticker-track flex w-max items-center gap-10 whitespace-nowrap">
              {[...breakingNews, ...breakingNews].map((headline, index) => (
                <li
                  key={index}
                  aria-hidden={index >= breakingNews.length}
                  className="font-display text-xs text-mute"
                >
                  {headline}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul aria-label={topSocialLabel} className="hidden shrink-0 items-center gap-1 sm:flex">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center text-mute transition-colors hover:text-brand"
              >
                <SocialIcon name={social.name} className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={topSearchLabel}
          className="flex h-8 w-8 items-center justify-center text-mute transition-colors hover:text-brand"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>
        <a
          href="#"
          className="flex shrink-0 items-center gap-1 font-display text-sm text-mute transition-colors hover:text-brand"
        >
          <LogIn className="h-4 w-4" aria-hidden="true" />
          {loginLabel}
        </a>
      </div>
    </div>
  )
}
