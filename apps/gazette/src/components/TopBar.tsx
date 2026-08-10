import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { socialLabels, socialLinks } from '../data'

export function TopBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="bg-ink dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-[10px]">
        <ul className="flex items-center gap-4" aria-label="Social media">
          {socialLinks.map((name) => (
            <li key={name}>
              <a
                href="#home"
                aria-label={socialLabels[name]}
                className="text-white opacity-50 transition-opacity hover:opacity-100"
              >
                <BrandIcon name={name} className="h-[14px] w-[14px]" />
              </a>
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} role="search" className="relative">
          <label htmlFor="top-search" className="sr-only">
            Search
          </label>
          <input
            id="top-search"
            type="search"
            placeholder="Type keyword to search..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-w-[300px] bg-search px-[15px] py-1 pr-9 text-sm text-white placeholder:text-white/40 focus:bg-searchfocus focus:outline-none dark:bg-gray-800 dark:focus:bg-gray-700"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  )
}
