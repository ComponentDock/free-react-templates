import { useState } from 'react'
import { Search } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const TLDS = ['.com', '.net', '.org', '.us', '.in']

const TLD_PRICES = [
  { tld: '.com', price: '$1.95' },
  { tld: '.net', price: '$1.95' },
  { tld: '.org', price: '$1.95' },
  { tld: '.us', price: '$1.95' },
  { tld: '.in', price: '$1.95' },
]

const DOMAIN_PATTERN = /^[A-Za-z0-9][A-Za-z0-9-]{0,62}(\.[A-Za-z]{2,})?$/

export function DomainSearch() {
  const [name, setName] = useState('')
  const [tld, setTld] = useState<string>('.com')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = name.trim()
    if (!DOMAIN_PATTERN.test(value)) {
      setError('Enter a domain name such as mybrand or mybrand.com')
      setResult('')
      return
    }
    setError('')
    setResult(`${value}${tld} is available — we will reserve it with your plan.`)
  }

  return (
    <section id="domains" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Register your domain now!</SectionTitle>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border-2 sm:border-brand sm:bg-white sm:pl-5"
        >
          <label htmlFor="domain-name" className="sr-only">
            Domain name
          </label>
          <input
            id="domain-name"
            name="domain"
            type="text"
            autoComplete="off"
            placeholder="ex: cloudhost"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-describedby="domain-results"
            className="h-[54px] w-full border-2 border-brand px-5 text-sm text-[#111] outline-none placeholder:text-[#666] focus-visible:border-brand-dark sm:border-0 sm:px-0"
          />

          <label htmlFor="domain-tld" className="sr-only">
            Domain ending
          </label>
          <select
            id="domain-tld"
            name="tld"
            value={tld}
            onChange={(event) => setTld(event.target.value)}
            className="h-[54px] w-full border-2 border-brand bg-white px-4 text-sm font-medium text-[#111] outline-none focus-visible:border-brand-dark sm:w-auto sm:border-0 sm:border-l sm:border-l-[#e1e1e1]"
          >
            {TLDS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 sm:ml-auto"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>

        <p
          id="domain-results"
          role="status"
          aria-live="polite"
          className="mt-4 text-center text-sm text-[#444]"
        >
          {error || result}
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-3">
          {TLD_PRICES.map((entry) => (
            <li key={entry.tld} className="text-xl font-bold text-brand">
              {entry.tld} <span className="font-medium text-[#111]">{entry.price}</span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-[#666]">
          Search for your name, choose an ending and register it in minutes. Prices are per year,
          and every hosting plan includes one free domain for the first twelve months.
        </p>
      </div>
    </section>
  )
}
