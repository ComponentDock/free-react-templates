import { useState } from 'react'
import type { FormEvent } from 'react'
import { ChevronDown, Search, Server } from 'lucide-react'
import { domainExtensions } from '../data'

/* The original Bhost hero: dark navy parallax photo, a white circular
   server icon, a 60px/600 white headline, and a white pill domain-search
   bar with an extension dropdown on the left and a gradient SEARCH button
   on the right. The chart backdrop is recreated as a static decorative
   pattern (no parallax library, no copied assets). */
export function Hero() {
  const [extension, setExtension] = useState<string>(domainExtensions[0])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [domain, setDomain] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="home" className="relative overflow-hidden bg-navy-900">
      {/* Decorative chart backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="h-full w-full opacity-40" viewBox="0 0 1200 700" preserveAspectRatio="none">
          <g stroke="#2a3a63" strokeWidth="1">
            <line x1="0" y1="140" x2="1200" y2="140" />
            <line x1="0" y1="280" x2="1200" y2="280" />
            <line x1="0" y1="420" x2="1200" y2="420" />
            <line x1="0" y1="560" x2="1200" y2="560" />
          </g>
          <polyline
            fill="none"
            stroke="#487fee"
            strokeWidth="3"
            points="0,480 200,420 400,450 600,320 800,360 1000,220 1200,260"
          />
          <polyline
            fill="none"
            stroke="#b632fa"
            strokeWidth="3"
            points="0,560 220,500 420,520 640,400 840,440 1040,300 1200,340"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 pt-40 pb-44 text-center sm:px-6 lg:px-8">
        <div className="flex h-[114px] w-[114px] items-center justify-center rounded-full bg-white">
          <Server className="h-[63px] w-[63px] text-brand-500" aria-hidden="true" />
        </div>
        <h1 className="mt-[42px] text-[40px] font-semibold leading-tight text-white sm:text-[60px]">
          Choose the perfect hosting
        </h1>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex w-full max-w-3xl flex-col items-stretch gap-4 sm:flex-row"
          aria-label="Domain search"
        >
          <div className="flex h-[70px] flex-1 items-center overflow-hidden rounded-[35px] bg-white shadow-lg">
            <div className="relative h-full">
              <button
                type="button"
                onClick={() => setDropdownOpen((value) => !value)}
                aria-expanded={dropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select domain extension"
                className="flex h-full w-[150px] items-center justify-between bg-steel-300 px-5 text-lg font-medium text-[#2c2c2c]"
              >
                {extension}
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </button>
              {dropdownOpen && (
                <ul
                  role="listbox"
                  aria-label="Domain extensions"
                  className="absolute left-0 top-full z-10 w-[150px] border border-steel-300 bg-white shadow-lg"
                >
                  {domainExtensions.map((ext) => (
                    <li key={ext} role="option" aria-selected={ext === extension}>
                      <button
                        type="button"
                        onClick={() => {
                          setExtension(ext)
                          setDropdownOpen(false)
                        }}
                        className="block w-full px-5 py-3 text-left text-lg font-medium text-[#2c2c2c] transition-colors hover:bg-steel-300"
                      >
                        {ext}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <input
              type="text"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
              placeholder="Your domain name"
              aria-label="Your domain name"
              className="h-full min-w-0 flex-1 pl-5 text-lg font-medium text-[#2c2c2c] placeholder:text-steel-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-brand-gradient flex h-[70px] items-center justify-center gap-2 rounded-[35px] px-10 text-sm font-bold uppercase tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
