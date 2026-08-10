import type { FormEvent } from 'react'
import { Mail } from 'lucide-react'
import {
  adLabel,
  categories,
  categoriesTitle,
  imgUrl,
  newsletterPlaceholder,
  newsletterTitle,
  popularPosts,
  popularTitle,
  socialTiles,
  socialWidgetTitle,
  subscribeLabel,
} from '../data'
import { BrandIcon } from './BrandIcon'

const tileColors = {
  facebook: 'bg-fb',
  twitter: 'bg-tw',
  googleplus: 'bg-gp',
  instagram: 'bg-ig',
} as const

export function Sidebar() {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <aside aria-label="Sidebar" className="w-full shrink-0 space-y-8 lg:w-[320px]">
      <div className="flex h-32 items-center justify-center border-2 border-dashed border-brand/60 text-center text-xs font-bold tracking-widest text-meta uppercase">
        {adLabel}
      </div>

      <div>
        <h2 className="mb-6 flex items-center gap-3 font-display text-base font-bold tracking-widest text-ink uppercase">
          <span className="bg-white pr-3">{socialWidgetTitle}</span>
          <span aria-hidden="true" className="h-0.5 flex-1 bg-line" />
        </h2>
        <div className="flex flex-col gap-3">
          {socialTiles.map((tile) => (
            <a
              key={tile.name}
              href="#"
              className={`flex items-center justify-between px-5 py-4 text-white transition-opacity hover:opacity-90 ${tileColors[tile.name]}`}
            >
              <BrandIcon name={tile.name} className="h-5 w-5" />
              <span className="text-sm font-bold">{tile.followers}</span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 flex items-center gap-3 font-display text-base font-bold tracking-widest text-ink uppercase">
          <span className="bg-white pr-3">{categoriesTitle}</span>
          <span aria-hidden="true" className="h-0.5 flex-1 bg-line" />
        </h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.name}
              className="flex items-center justify-between border-b border-line py-3"
            >
              <a
                href="#"
                className="text-sm font-bold text-ink uppercase transition-colors hover:text-brand"
              >
                {category.name}
              </a>
              <span className="text-sm text-meta">{category.count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative overflow-hidden border-l-2 border-r-2 border-dashed border-line px-6 py-8">
        <Mail
          aria-hidden="true"
          className="absolute -right-4 -bottom-6 h-40 w-40 rotate-[13deg] text-line"
        />
        <h2 className="mb-4 font-display text-base font-bold tracking-widest text-ink uppercase">
          {newsletterTitle}
        </h2>
        <form onSubmit={handleSubscribe} className="relative">
          <label htmlFor="sidebar-email" className="sr-only">
            Email
          </label>
          <input
            id="sidebar-email"
            type="email"
            placeholder={newsletterPlaceholder}
            className="h-10 w-full border border-line px-3 text-sm text-ink outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="mt-3 h-12 w-full border-2 border-brand bg-brand px-6 font-display text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-transparent hover:text-brand"
          >
            {subscribeLabel}
          </button>
        </form>
      </div>

      <div>
        <h2 className="mb-6 flex items-center gap-3 font-display text-base font-bold tracking-widest text-ink uppercase">
          <span className="bg-white pr-3">{popularTitle}</span>
          <span aria-hidden="true" className="h-0.5 flex-1 bg-line" />
        </h2>
        <ul className="flex flex-col gap-5">
          {popularPosts.map((post) => (
            <li key={post.seed} className="flex gap-4">
              <img
                src={imgUrl(post.seed, 100, 100)}
                alt=""
                loading="lazy"
                className="h-16 w-16 shrink-0 object-cover"
              />
              <div>
                <a href="#" className="text-xs font-bold tracking-wide text-brand uppercase">
                  {post.category}
                </a>
                <h3 className="mt-0.5 text-sm leading-snug font-bold text-ink">{post.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
