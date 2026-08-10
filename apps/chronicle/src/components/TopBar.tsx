import { useState } from 'react'
import type { FormEvent } from 'react'
import { Lock, Menu, Search } from 'lucide-react'
import { searchPlaceholder, siteName } from '../data'

interface TopBarProps {
  onMenuToggle: () => void
}

export function TopBar({ onMenuToggle }: TopBarProps) {
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="relative border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <a
          href="#"
          className="hidden items-center gap-1 text-sm text-ink transition-colors hover:text-brand lg:inline-flex"
        >
          <Lock className="mr-1 h-4 w-4" aria-hidden="true" />
          Sign In
        </a>

        <a
          href="#home"
          className="font-display text-[2rem] leading-none text-ink transition-colors hover:text-brand"
        >
          {siteName}
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen((open) => !open)}
            className="flex h-10 items-center gap-1 text-sm text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {searchOpen && (
        <form
          role="search"
          aria-label="Site search"
          onSubmit={handleSearch}
          className="absolute top-full right-4 z-40 sm:right-6"
        >
          <label htmlFor="top-search" className="sr-only">
            Search
          </label>
          <input
            id="top-search"
            type="search"
            placeholder={searchPlaceholder}
            autoFocus
            className="h-[45px] w-[260px] border-2 border-tile bg-white px-3 text-base text-ink placeholder:text-meta/70 focus:border-line focus:outline-none sm:w-[320px]"
          />
        </form>
      )}
    </div>
  )
}
