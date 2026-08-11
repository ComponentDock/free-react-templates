import { type FormEvent, useState } from 'react'
import { Search, X } from 'lucide-react'
import {
  aboutBlurb,
  aboutTitle,
  authorName,
  authorPortraitAlt,
  closeLabel,
  instagramTitle,
  menuInstagramLabel,
  menuInstagramSeeds,
  menuLinks,
  navLabel,
  searchButtonLabel,
  searchLabel,
  searchPlaceholder,
} from '../data'
import { cn } from '@free-react-templates/ui'
import { SocialIcons } from './SocialIcons'

interface OffCanvasMenuProps {
  open: boolean
  onClose: () => void
}

/* Off-canvas nav (#colorlib-main-nav equivalent) — right slide-in panel
   (360px desktop / 300px mobile, white, z-1002): search form (fafafa input
   + pink search button), uppercase menu links (Blog active → pink), About
   Me block (portrait, name, blurb, socials) and a 2x2 Instagram tile grid. */
export function OffCanvasMenu({ open, onClose }: OffCanvasMenuProps) {
  const [query, setQuery] = useState('')

  if (!open) {
    return null
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <nav
      id="clamor-off-canvas"
      aria-label={navLabel}
      className="fixed inset-y-0 right-0 z-[1002] w-[360px] max-w-full overflow-y-auto bg-white px-10 py-16 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
    >
      <button
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
        className="absolute right-8 top-6 text-ink transition-colors hover:text-brand"
      >
        <X aria-hidden="true" className="h-5 w-5" />
      </button>

      {/* Search form. */}
      <form onSubmit={onSubmit} className="flex">
        <label htmlFor="clamor-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="clamor-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full border-2 border-border-soft bg-surface px-4 py-2.5 text-sm text-ink outline-none placeholder:text-gray-500 focus:border-brand"
        />
        <button
          type="submit"
          aria-label={searchButtonLabel}
          className="bg-brand px-4 text-white transition-colors hover:bg-primary-700"
        >
          <Search aria-hidden="true" className="h-4 w-4" />
        </button>
      </form>

      {/* Menu links — uppercase 16px, Blog active in pink. */}
      <ul className="mt-8">
        {menuLinks.map((link) => (
          <li key={link.label}>
            <a
              href="#"
              aria-current={link.active ? 'page' : undefined}
              onClick={onClose}
              className={cn(
                'block border-b border-border-soft py-3 text-base uppercase text-ink transition-colors hover:text-brand',
                link.active && 'text-brand',
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* About Me block. */}
      <div className="mt-10">
        <h3 className="font-serif text-lg uppercase tracking-widest text-ink">{aboutTitle}</h3>
        <img
          src="https://picsum.photos/seed/clamor-menu-author/120/120"
          alt={authorPortraitAlt}
          className="mt-4 h-16 w-16 rounded-full object-cover"
        />
        <p className="mt-3 font-serif text-base text-ink">{authorName}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{aboutBlurb}</p>
        <SocialIcons className="mt-4 text-brand" />
      </div>

      {/* Instagram tiles. */}
      <div className="mt-10">
        <h3 className="font-serif text-lg uppercase tracking-widest text-ink">{instagramTitle}</h3>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {menuInstagramSeeds.map((seed, index) => (
            <li key={seed}>
              <img
                src={`https://picsum.photos/seed/${seed}/300/150`}
                alt={menuInstagramLabel(index)}
                className="h-[150px] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
