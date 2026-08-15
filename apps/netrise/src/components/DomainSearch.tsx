import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { tldPrices, tlds } from '../data'

export function DomainSearch() {
  const [domain, setDomain] = useState('')
  const [tld, setTld] = useState(tlds[0]!)
  const [result, setResult] = useState<string | null>(null)

  const handleDomainChange = (event: ChangeEvent<HTMLInputElement>) => setDomain(event.target.value)
  const handleTldChange = (event: ChangeEvent<HTMLSelectElement>) => setTld(event.target.value)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = domain.trim()
    if (!trimmed) {
      setResult('Please enter a domain name to search.')
      return
    }
    setResult(`Good news — ${trimmed}${tld} is available!`)
  }

  return (
    <section id="domain" aria-label="Search you domain name" className="bg-navy py-20">
      <div className="mx-auto max-w-[900px] px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Search You Domain Name</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-base font-light text-white/80">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-[720px] flex-col gap-0 sm:flex-row"
          aria-label="Domain search form"
        >
          <input
            type="text"
            value={domain}
            onChange={handleDomainChange}
            placeholder="Enter your domain name..."
            aria-label="Domain name"
            className="h-[52px] flex-1 border border-gray-400 bg-white px-4 text-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky"
          />
          <select
            value={tld}
            onChange={handleTldChange}
            aria-label="Top level domain"
            className="h-[52px] border border-l-0 border-gray-400 bg-white px-3 text-ink focus:border-transparent focus:outline-none focus:ring-2 focus:ring-sky"
          >
            {tlds.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="flex h-[52px] items-center justify-center gap-2 bg-[linear-gradient(45deg,#56c8fb,#627bed)] px-6 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search Domain
          </button>
        </form>

        {result && (
          <p
            role="status"
            className="mx-auto mt-6 max-w-[560px] rounded bg-white/10 px-4 py-3 text-base text-white"
          >
            {result}
          </p>
        )}

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {tldPrices.map(({ tld: option, price }) => (
            <li key={option} className="flex items-center gap-2 text-base font-light text-white/90">
              <span className="font-semibold text-white">{option}</span>
              {price}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
