import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { filter } from '../data'

const pillClass = (checked: boolean) =>
  cn(
    'cursor-pointer rounded px-2.5 py-2 text-[14px] text-white transition-colors',
    checked ? 'bg-brand' : 'bg-outline',
  )

/* Reference: div.filter-search — white rounded search bar overlapping the
   hero bottom (-57px, z-index 9): Location + Property Type selects, a
   Price dual-handle range (50k–300k), Bedrooms + Bathrooms radio pills,
   and a green "Search" submit button (radius rounded only on the right). */
export function FilterSearch() {
  const [location, setLocation] = useState(filter.locations[0]!)
  const [type, setType] = useState(filter.types[0]!)
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(300)
  const [bedrooms, setBedrooms] = useState(filter.bedrooms[0]!)
  const [bathrooms, setBathrooms] = useState(filter.bathrooms[0]!)

  return (
    <section
      id="search"
      aria-label="Property search"
      className="relative z-10 -mt-[57px] px-4 lg:px-8"
    >
      <form
        className="mx-auto flex h-auto max-w-7xl flex-wrap items-stretch rounded bg-white shadow-[2px_15px_30px_rgba(0,0,0,0.1)] lg:h-[115px]"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="flex min-w-[180px] flex-1 flex-col justify-center gap-1 border-b border-divider px-6 py-4 lg:border-r lg:border-b-0 lg:py-0">
          <span className="text-[14px] font-light text-label">{filter.locationLabel}</span>
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="cursor-pointer border-b border-[#E7E7E7] bg-transparent py-1 text-[16px] font-medium text-select outline-none"
          >
            {filter.locations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="flex min-w-[180px] flex-1 flex-col justify-center gap-1 border-b border-divider px-6 py-4 lg:border-r lg:border-b-0 lg:py-0">
          <span className="text-[14px] font-light text-label">{filter.typeLabel}</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="cursor-pointer border-b border-[#E7E7E7] bg-transparent py-1 text-[16px] font-medium text-select outline-none"
          >
            {filter.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <div className="flex min-w-[200px] flex-1 flex-col justify-center gap-1 border-b border-divider px-6 py-4 lg:border-r lg:border-b-0 lg:py-0">
          <span className="text-[14px] font-light text-label">{filter.priceLabel}</span>
          <div className="flex items-center gap-2 text-[16px] font-medium text-select">
            <input
              type="range"
              aria-label="Minimum price"
              min={50}
              max={300}
              step={5}
              value={minPrice}
              onChange={(event) => setMinPrice(Number(event.target.value))}
              className="w-full accent-brand"
            />
            <input
              type="range"
              aria-label="Maximum price"
              min={50}
              max={300}
              step={5}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="w-full accent-brand"
            />
            <span className="whitespace-nowrap text-[14px]">
              ${minPrice}k – ${maxPrice}k
            </span>
          </div>
        </div>
        {[
          {
            label: filter.bedroomsLabel,
            value: bedrooms,
            set: setBedrooms,
            options: filter.bedrooms,
          },
          {
            label: filter.bathroomsLabel,
            value: bathrooms,
            set: setBathrooms,
            options: filter.bathrooms,
          },
        ].map((group) => (
          <fieldset
            key={group.label}
            className="flex min-w-[160px] flex-1 flex-col justify-center gap-1 border-b border-divider px-6 py-4 lg:border-r lg:border-b-0 lg:py-0"
          >
            <legend className="text-[14px] font-light text-label">{group.label}</legend>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => (
                <label key={option} className={pillClass(group.value === option)}>
                  <input
                    type="radio"
                    name={group.label}
                    value={option}
                    checked={group.value === option}
                    onChange={() => group.set(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-b bg-brand px-8 text-[18px] font-medium text-white transition-colors hover:bg-brand-dark lg:w-auto lg:rounded-r lg:rounded-bl-none"
        >
          <Search size={20} aria-hidden="true" />
          {filter.searchLabel}
        </button>
      </form>
    </section>
  )
}
