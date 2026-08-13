import { useState, type FormEvent } from 'react'
import { domainSearch } from '../data'

/** Domain search section (reference `.domain-search-section.spad.set-bg`):
 *  dark gradient background, white section title, a white rounded input with
 *  a magenta search button, and a supporting paragraph. */
export function DomainSearch() {
  const [searched, setSearched] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearched(true)
  }

  return (
    <section
      id="news"
      aria-label="Domain search"
      className="bg-gradient-to-br from-indigo-deep to-near-black py-[105px]"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          {domainSearch.eyebrow}
        </p>
        <h2 className="mt-2 font-heading text-5xl font-bold text-white">{domainSearch.title}</h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          aria-label="Domain search form"
        >
          <label htmlFor="domain" className="sr-only">
            Domain name
          </label>
          <input
            id="domain"
            type="text"
            placeholder={domainSearch.placeholder}
            className="h-[59px] w-full rounded-[14px] border-0 bg-white px-7 text-sm outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button
            type="submit"
            className="h-[59px] shrink-0 rounded-[14px] bg-primary-600 px-10 text-sm text-white transition-colors hover:bg-primary-700"
          >
            {domainSearch.button}
          </button>
        </form>

        {searched ? (
          <p role="status" className="mt-4 text-sm font-semibold text-white">
            Searching domains…
          </p>
        ) : null}

        <p className="mt-6 text-sm leading-relaxed text-white/40">{domainSearch.note}</p>
      </div>
    </section>
  )
}
