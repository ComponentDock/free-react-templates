import type { FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { tldPrices } from '../data'

/** Blue domain-search band: name input + extension select + green Search
 *  button, with a row of TLD prices below. */
export function DomainBand() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="domain" className="bg-primary-600">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="domain-name" className="sr-only">
            Domain name
          </label>
          <input
            id="domain-name"
            type="text"
            placeholder="Enter your domain name..."
            className="h-[60px] flex-1 rounded-l-[4px] border-0 bg-white px-6 text-sm text-black placeholder:text-black/50 focus:ring-2 focus:ring-accent-500 focus:outline-none"
          />
          <div className="relative">
            <label htmlFor="domain-extension" className="sr-only">
              Domain extension
            </label>
            <select
              id="domain-extension"
              defaultValue=".com"
              className="h-[60px] w-full appearance-none rounded-none border-l border-gray-200 bg-white px-4 pr-10 text-sm text-black focus:ring-2 focus:ring-accent-500 focus:outline-none sm:w-[300px]"
            >
              {tldPrices.map(({ tld }) => (
                <option key={tld} value={tld}>
                  {tld}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
          </div>
          <button
            type="submit"
            className="h-[60px] rounded-r-[4px] bg-accent-500 px-10 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            Search
          </button>
        </form>

        <p className="mt-5 text-sm text-white">
          {tldPrices.map(({ tld, price }) => (
            <span key={tld} className="mx-2 inline-block">
              {tld} {price}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
