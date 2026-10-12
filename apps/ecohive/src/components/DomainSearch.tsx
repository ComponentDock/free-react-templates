import { useState } from 'react'
import { Globe, Search } from 'lucide-react'

const TLD_PRICES = [
  { tld: '.com', price: '$15.99' },
  { tld: '.net', price: '$10.99' },
  { tld: '.org', price: '$10.99' },
  { tld: '.me', price: '$10.99' },
]

const DOMAIN_PATTERN = /^[A-Za-z0-9][A-Za-z0-9-]{0,62}(\.[A-Za-z]{2,})?$/

export function DomainSearch() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = name.trim()
    if (!DOMAIN_PATTERN.test(value)) {
      setError('Enter a domain name such as yourbrand or yourbrand.com')
      setMessage('')
      return
    }
    setError('')
    setMessage(`${value} is available — add it to any plan at checkout.`)
  }

  return (
    <section id="domains" className="bg-shell pb-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Search new domain
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              Type the name you want and we will check it across every ending in seconds.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="w-full">
            <div className="flex items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
              <Globe className="h-5 w-5 shrink-0 text-accent-strong" aria-hidden="true" />
              <label htmlFor="domain-name" className="sr-only">
                Domain name
              </label>
              <input
                id="domain-name"
                name="domain"
                type="text"
                autoComplete="off"
                placeholder="ex: yourbrand"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-describedby="domain-results"
                className="h-12 w-full border-0 bg-transparent text-sm text-shell outline-none placeholder:text-shell/50 focus-visible:outline-none"
              />
              <button
                type="submit"
                aria-label="Search domain"
                className="bg-gradient-to-b from-gradient-from to-gradient-to flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p
              id="domain-results"
              role="status"
              aria-live="polite"
              className="mt-3 text-sm text-muted"
            >
              {error || message}
            </p>
          </form>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {TLD_PRICES.map((entry) => (
            <li key={entry.tld} className="font-heading text-xl font-bold text-accent">
              <span>{entry.tld}</span> <span className="font-medium text-white">{entry.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
