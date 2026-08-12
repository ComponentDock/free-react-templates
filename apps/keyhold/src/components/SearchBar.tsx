import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const propertyTypes = [
  'Type',
  'Commercial',
  'Office',
  'Residential',
  'Villa',
  'Condominium',
  'Apartment',
] as const

const propertyStatuses = ['Type', 'Rent', 'Sale'] as const

const priceLimits = [
  '$5,000',
  '$10,000',
  '$50,000',
  '$100,000',
  '$200,000',
  '$300,000',
  '$400,000',
  '$500,000',
  '$600,000',
  '$700,000',
  '$800,000',
  '$900,000',
  '$1,000,000',
  '$1,250,000',
  '$1,500,000',
  '$2,000,000',
] as const

const fieldClasses =
  'h-12 w-full rounded-[3px] border border-gray-300 bg-white px-3 text-sm text-ink focus:border-brand focus:outline-none'

/**
 * SearchBar — horizontal property search form (source `.search-wrap-1` →
 * `.search-property-1`) overlapping the hero bottom: Location input +
 * Property Type / Status / Price Limit selects + a gold submit. Submission
 * prevents the default reload, clears the fields, and confirms.
 */
export function SearchBar() {
  const [location, setLocation] = useState('')
  const [type, setType] = useState('Type')
  const [status, setStatus] = useState('Type')
  const [price, setPrice] = useState('$5,000')
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setConfirmed(true)
    setLocation('')
    setType('Type')
    setStatus('Type')
    setPrice('$5,000')
  }

  return (
    <section id="search" className="relative z-10 -mt-20">
      <div className="mx-auto max-w-5xl px-4">
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[3px] bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)] md:grid-cols-2 lg:grid-cols-5 lg:items-end"
        >
          <div className="lg:col-span-1">
            <label htmlFor="location" className="mb-2 block text-sm font-semibold text-soft">
              Location
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="location"
                type="text"
                value={location}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setLocation(event.target.value)}
                placeholder="City/Locality Name"
                className={`${fieldClasses} pl-9`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="property-type" className="mb-2 block text-sm font-semibold text-soft">
              Property Type
            </label>
            <select
              id="property-type"
              value={type}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setType(event.target.value)}
              className={fieldClasses}
            >
              {propertyTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="property-status" className="mb-2 block text-sm font-semibold text-soft">
              Property Status
            </label>
            <select
              id="property-status"
              value={status}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value)}
              className={fieldClasses}
            >
              {propertyStatuses.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price-limit" className="mb-2 block text-sm font-semibold text-soft">
              Price Limit
            </label>
            <select
              id="price-limit"
              value={price}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setPrice(event.target.value)}
              className={fieldClasses}
            >
              {priceLimits.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-[3px] bg-brand text-white hover:bg-brand-dark"
          >
            Search Property
          </Button>
        </form>

        {confirmed && (
          <p role="status" className="mt-4 text-center text-sm font-medium text-green-700">
            Search complete — we will email you matching listings.
          </p>
        )}
      </div>
    </section>
  )
}
