import { useState, type FormEvent } from 'react'
import { Briefcase, MapPin, Search, User } from 'lucide-react'
import { JOB_TYPES, SEARCH_TABS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Tabbed search widget in the hero: "Find a Job" (active: white bg) and
   "Find a Candidate" (orange bg) tabs switch the form below. Forms have
   no backend — submit is prevented client-side. */
export function SearchWidget() {
  const [tab, setTab] = useState<'job' | 'candidate'>('job')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="bg-white p-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
      <div role="tablist" aria-label="Search type" className="flex gap-2">
        {SEARCH_TABS.map((searchTab) => (
          <button
            key={searchTab.id}
            type="button"
            role="tab"
            id={`search-tab-${searchTab.id}`}
            aria-selected={tab === searchTab.id}
            aria-controls="search-panel"
            onClick={() => setTab(searchTab.id)}
            className={cn(
              'rounded-[5px] px-6 py-3 text-sm font-semibold transition-colors',
              tab === searchTab.id
                ? 'bg-white text-black'
                : 'bg-accent text-white hover:opacity-90',
            )}
          >
            {searchTab.label}
          </button>
        ))}
      </div>

      <form
        role="tabpanel"
        id="search-panel"
        aria-labelledby={`search-tab-${tab}`}
        onSubmit={handleSubmit}
        className="mt-4 grid gap-3 text-left md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]"
      >
        <label className="relative block">
          <span className="sr-only">{tab === 'job' ? 'Keyword' : 'Candidate name'}</span>
          {tab === 'job' ? (
            <Briefcase
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d9d9d9]"
              aria-hidden="true"
            />
          ) : (
            <User
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d9d9d9]"
              aria-hidden="true"
            />
          )}
          <input
            name={tab === 'job' ? 'keyword' : 'name'}
            placeholder={tab === 'job' ? 'eg. Graphic, Web Developer' : 'eg. Adam Scott'}
            className="w-full rounded-[5px] border border-black/10 bg-white py-3 pl-10 pr-3 text-[14px] text-black placeholder:text-black/40 focus:border-brand focus:outline-none"
          />
        </label>

        <label className="relative block">
          <span className="sr-only">Category</span>
          <select
            name="category"
            aria-label="Category"
            className="w-full rounded-[5px] border border-black/10 bg-white py-3 pl-3 pr-3 text-[14px] text-black focus:border-brand focus:outline-none"
          >
            {JOB_TYPES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="relative block">
          <span className="sr-only">Location</span>
          <MapPin
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d9d9d9]"
            aria-hidden="true"
          />
          <input
            name="location"
            placeholder="Location"
            aria-label="Location"
            className="w-full rounded-[5px] border border-black/10 bg-white py-3 pl-10 pr-3 text-[14px] text-black placeholder:text-black/40 focus:border-brand focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="rounded-[5px] bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand hover:ring-1 hover:ring-brand"
        >
          <span className="inline-flex items-center gap-2">
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </span>
        </button>
      </form>
    </div>
  )
}
