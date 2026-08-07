import { useState } from 'react'
import type { FormEvent } from 'react'
import { Search } from 'lucide-react'

const extensions = [
  { tld: '.com', price: '$9.75' },
  { tld: '.net', price: '$9.90' },
  { tld: '.biz', price: '$8.95' },
  { tld: '.me', price: '$7.95' },
] as const

export function DomainSearch() {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  return (
    <section
      id="domain"
      aria-label="Domain search"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">Domains</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Get A Domain Name
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            With FREE Email, DNS, Theft Protection, and other features.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="domain-query" className="sr-only">
            Domain name
          </label>
          <input
            id="domain-query"
            type="text"
            required
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find your domain name"
            className="w-full min-w-0 rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-limegreen px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {extensions.map((ext) => (
            <li key={ext.tld} className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold text-primary-400">{ext.tld}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{ext.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
