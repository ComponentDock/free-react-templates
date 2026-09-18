import { useState } from 'react'

const tlds = [
  { ext: '.com', price: '$5.99' },
  { ext: '.net', price: '$5.99' },
  { ext: '.org', price: '$5.99' },
  { ext: '.in', price: '$5.99' },
]

export function DomainSearch() {
  const [domain, setDomain] = useState('')
  const [selected, setSelected] = useState<Record<string, boolean>>({})

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <section className="bg-surface py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <h3 className="whitespace-nowrap text-xl font-bold text-heading">
            Search Your Domain Now!
          </h3>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Domain name"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 rounded-none border border-border bg-transparent px-5 py-3 text-sm text-body placeholder:text-body focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-none bg-gradient-to-r from-brand-start to-brand-end px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-start/20 transition-colors hover:opacity-90"
              >
                Search
              </button>
            </form>
            <div className="flex flex-wrap gap-4">
              {tlds.map((tld) => (
                <label
                  key={tld.ext}
                  className="flex items-center gap-1 text-sm font-bold text-heading"
                >
                  <input
                    type="checkbox"
                    checked={selected[tld.ext] ?? false}
                    onChange={(e) => setSelected({ ...selected, [tld.ext]: e.target.checked })}
                    className="accent-heading"
                  />
                  {tld.ext} <span className="font-normal text-body">({tld.price})</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
