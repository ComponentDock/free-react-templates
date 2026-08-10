import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { breakingHeadline, breakingLabel, searchPlaceholder } from '../data'

/** Breaking-news strip: red tag, ticker headline, search form. */
export function BreakingNews() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="bg-primary" aria-label="Breaking news">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-4 px-4 py-2.5">
        <a href="#" className="inline-block bg-accent px-3 py-1.5 text-xs font-semibold text-white">
          {breakingLabel}
        </a>
        <a href="#" className="text-xs text-[#ccc] transition-colors hover:text-white">
          {breakingHeadline}
        </a>
        <form role="search" onSubmit={handleSearch} className="ml-auto flex items-center">
          <label htmlFor="breaking-search" className="sr-only">
            {searchPlaceholder}
          </label>
          <input
            id="breaking-search"
            type="search"
            placeholder={searchPlaceholder}
            className="h-[35px] w-40 rounded-[3px] border border-[#777] bg-transparent px-3 text-xs text-[#eee] placeholder:text-[#999] focus:border-[#eee] focus:outline-none"
          />
          <button
            type="submit"
            aria-label={searchPlaceholder}
            className="-ml-px flex h-[35px] w-10 items-center justify-center rounded-r-[3px] border border-l-0 border-[#777] text-[#eee] transition-colors hover:border-[#eee]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}
