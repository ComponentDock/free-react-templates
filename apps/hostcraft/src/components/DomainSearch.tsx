import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const extensions = ['.com', '.net', '.biz', '.co', '.me']
const prices = [
  { ext: '.com', price: '$9.75' },
  { ext: '.net', price: '$9.50' },
  { ext: '.biz', price: '$8.95' },
  { ext: '.co', price: '$7.80' },
  { ext: '.me', price: '$7.95' },
]

export function DomainSearch() {
  const [domain, setDomain] = useState('')
  const [ext, setExt] = useState('.com')

  return (
    <section id="domain" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left text */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-text-primary">Search Your Domain Name</h2>
            <p className="max-w-md text-text-muted">
              Find the perfect domain name for your website. Check availability and register your
              ideal domain today.
            </p>
          </div>

          {/* Right form */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your domain name..."
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="flex-1 rounded border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none"
              aria-label="Domain name"
            />
            <select
              value={ext}
              onChange={(e) => setExt(e.target.value)}
              className="rounded border border-gray-300 px-3 py-3 text-sm focus:border-brand focus:outline-none"
              aria-label="Domain extension"
            >
              {extensions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
            <Button className="rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
              Search
            </Button>
          </div>
        </div>

        {/* Price list */}
        <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-8">
          {prices.map((item) => (
            <div key={item.ext} className="text-center">
              <span className="text-sm font-semibold text-text-primary">{item.ext}</span>
              <span className="ml-1 text-sm text-text-muted">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
