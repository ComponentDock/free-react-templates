import { useState, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { z } from 'zod'
import { domainPrices, domainSection, extensions } from '../data'

const domainSchema = z
  .string()
  .min(1, domainSection.emptyDomainMessage)
  .regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]{2,})?$/i, domainSection.invalidDomainMessage)

/* White domain-search section: pill form (input + extension select + blue
   Search button) with client-side validation, plus the extension price
   list (reference: .find-domain-area). */
export function DomainSearch() {
  const [domain, setDomain] = useState('')
  const [extension, setExtension] = useState(extensions[0]!)
  const [error, setError] = useState<string | null>(null)
  const [searched, setSearched] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = domainSchema.safeParse(domain)
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      setSearched(false)
      return
    }
    setError(null)
    setSearched(true)
  }

  return (
    <section aria-label="Domain search" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold text-ink lg:text-[48px]">{domainSection.title}</h2>
        <p className="mt-3 text-muted">{domainSection.sub}</p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-10 flex max-w-2xl items-stretch rounded-full bg-white p-2 shadow-[0_5px_15px_-2px_rgba(0,0,0,0.15)]"
        >
          <label htmlFor="domain-input" className="sr-only">
            {domainSection.inputLabel}
          </label>
          <input
            id="domain-input"
            type="search"
            value={domain}
            onChange={(event) => {
              setDomain(event.target.value)
              if (error) setError(null)
            }}
            placeholder={domainSection.inputPlaceholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? 'domain-error' : undefined}
            className="h-[60px] w-full rounded-l-full border-0 px-6 text-ink outline-none placeholder:text-faint"
          />
          <label htmlFor="domain-extension" className="sr-only">
            {domainSection.extensionLabel}
          </label>
          <select
            id="domain-extension"
            value={extension}
            onChange={(event) => setExtension(event.target.value)}
            className="h-[60px] cursor-pointer border-0 bg-transparent px-2 text-ink outline-none"
          >
            {extensions.map((ext) => (
              <option key={ext} value={ext}>
                {ext}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="flex h-[60px] shrink-0 items-center gap-2 rounded-full bg-primary px-8 font-semibold text-white transition-colors hover:bg-ink"
          >
            <Search aria-hidden="true" className="h-5 w-5" />
            {domainSection.searchLabel}
          </button>
        </form>
        {error ? (
          <p id="domain-error" role="alert" className="mt-4 text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}
        {searched ? (
          <p role="status" className="mt-4 text-sm font-medium text-primary">
            {domain.includes('.') ? domain : `${domain}${extension.toLowerCase()}`} is available —
            only $7 for the first year!
          </p>
        ) : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {domainPrices.map((price) => (
            <p key={price.extension} className="text-base font-semibold text-ink">
              {price.extension} <span className="font-normal text-muted">{price.price}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
