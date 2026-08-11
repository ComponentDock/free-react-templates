import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import {
  categoriesTitle,
  categoryRows,
  instagramPostLabel,
  instagramSidebarCount,
  instagramTitle,
  newsletterEmailPlaceholder,
  newsletterTitle,
  popularPosts,
  popularTitle,
  shareTitle,
  shareWidgetNames,
  sidebarSearchLabel,
  sidebarSearchPlaceholder,
  subscribeLabel,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Sidebar() {
  const preventSubmit = (event: FormEvent) => event.preventDefault()

  return (
    <aside aria-label="Sidebar" className="space-y-8 bg-white pb-16 lg:pb-24">
      <div className="bg-mist p-[50px_30px]">
        <form role="search" onSubmit={preventSubmit} className="flex">
          <input
            type="text"
            placeholder={sidebarSearchPlaceholder}
            aria-label={sidebarSearchPlaceholder}
            className="h-10 w-4/5 border-0 bg-transparent px-4 text-ink outline-none"
          />
          <button
            type="submit"
            aria-label={sidebarSearchLabel}
            className="flex h-10 w-1/5 items-center justify-center bg-white text-ink transition-opacity hover:opacity-80"
          >
            <Search aria-hidden="true" className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="bg-mist p-[50px_30px]">
        <h3 className="font-serif text-xl font-bold text-ink">{instagramTitle}</h3>
        <ul className="mt-6 grid grid-cols-3 gap-2">
          {Array.from({ length: instagramSidebarCount }, (_, index) => (
            <li key={index}>
              <img
                src={`https://picsum.photos/seed/rekindle-instagram-${index + 1}/200/200`}
                alt={instagramPostLabel(index)}
                className="aspect-square w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-mist p-[50px_30px]">
        <h3 className="font-serif text-xl font-bold text-ink">{categoriesTitle}</h3>
        <ul className="mt-6 space-y-4">
          {categoryRows.map((row) => (
            <li
              key={row.name}
              className="flex items-center justify-between bg-white px-5 py-3 text-sm text-muted"
            >
              <a href="#" className="transition-colors hover:text-ink">
                {row.name}
              </a>
              <span>{row.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-mist p-[50px_30px]">
        <h3 className="font-serif text-xl font-bold text-ink">{popularTitle}</h3>
        <ul className="mt-6 space-y-5">
          {popularPosts.map((post) => (
            <li key={post.seed} className="flex gap-4">
              <img
                src={`https://picsum.photos/seed/${post.seed}/120/120`}
                alt=""
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div>
                <h4 className="font-serif text-sm font-semibold leading-snug text-ink">
                  <a href="#" className="transition-colors hover:text-ink/70">
                    {post.title}
                  </a>
                </h4>
                <p className="mt-1 text-xs text-muted">{post.byline}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-mist p-[50px_30px]">
        <h3 className="font-serif text-xl font-bold text-ink">{newsletterTitle}</h3>
        <form onSubmit={preventSubmit} className="mt-6">
          <input
            type="email"
            placeholder={newsletterEmailPlaceholder}
            aria-label={newsletterEmailPlaceholder}
            className="w-full border border-black/10 bg-white px-4 py-3 text-ink outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            className="mt-4 block w-full bg-ink px-5 py-3 text-xs font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {subscribeLabel}
          </button>
        </form>
      </div>

      <div className="bg-mist p-[50px_30px]">
        <h3 className="font-serif text-xl font-bold text-ink">{shareTitle}</h3>
        <SocialIcons names={shareWidgetNames} className="mt-6 text-ink" />
      </div>
    </aside>
  )
}
