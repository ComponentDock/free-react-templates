import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { socialLabels, socialLinks, topBar } from '../data'

export function TopBar() {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2.5">
        <div className="hidden items-center gap-6 lg:flex">
          <span className="text-xs uppercase tracking-[0.08rem] text-meta dark:text-gray-400">
            {topBar.greeting}
          </span>
          <span className="text-xs uppercase tracking-[0.08rem] text-meta dark:text-gray-400">
            {topBar.email}
          </span>
        </div>

        <div className="ml-auto flex items-center gap-6 lg:ml-0">
          <ul className="hidden items-center gap-4 md:flex" aria-label="Social media">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="text-headsocial transition-colors hover:text-ink dark:text-gray-500 dark:hover:text-gray-200"
                >
                  <BrandIcon name={name} className="h-6 w-6" />
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
              placeholder={topBar.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full border-b-2 border-searchline bg-search py-1.5 pr-8 text-right text-xs italic text-meta placeholder:text-meta focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 md:w-[300px]"
            />
            <Search
              className="absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-meta dark:text-gray-400"
              aria-hidden="true"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
