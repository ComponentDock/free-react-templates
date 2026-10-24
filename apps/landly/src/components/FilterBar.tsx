import { useState, type FormEvent } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  bathroomOptions,
  bedroomOptions,
  filterSubmit,
  filterTabs,
  maxPrices,
  minPrices,
  propertyTypes,
  searchLabels,
} from '../data'

type TabId = (typeof filterTabs)[number]['id']

const fieldClass =
  'h-[55px] w-full rounded-[4px] border border-[#e6e6e6] bg-white px-5 text-[15px] font-normal text-body focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand'
const labelClass = 'sr-only'

interface SelectFieldProps {
  id: string
  label: string
  options: readonly string[]
}

function SelectField({ id, label, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select id={id} name={id} defaultValue={options[0]} className={fieldClass}>
        {options.map((option) => (
          <option key={`${id}-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

function SearchForm({ idPrefix, legend }: { idPrefix: string; legend: string }) {
  return (
    <form onSubmit={handleSubmit} aria-label={legend} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        <SelectField id={`${idPrefix}-type`} label={searchLabels.type} options={propertyTypes} />
        <div>
          <label htmlFor={`${idPrefix}-title`} className={labelClass}>
            {searchLabels.title}
          </label>
          <input
            id={`${idPrefix}-title`}
            name={`${idPrefix}-title`}
            type="text"
            placeholder={searchLabels.title}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-address`} className={labelClass}>
            {searchLabels.address}
          </label>
          <input
            id={`${idPrefix}-address`}
            name={`${idPrefix}-address`}
            type="text"
            placeholder={searchLabels.address}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <SelectField
          id={`${idPrefix}-bedrooms`}
          label={searchLabels.bedrooms}
          options={bedroomOptions}
        />
        <SelectField
          id={`${idPrefix}-bathrooms`}
          label={searchLabels.bathrooms}
          options={bathroomOptions}
        />
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            id={`${idPrefix}-min-price`}
            label={searchLabels.minPrice}
            options={minPrices}
          />
          <SelectField
            id={`${idPrefix}-max-price`}
            label={searchLabels.maxPrice}
            options={maxPrices}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="h-[55px] w-full rounded-[4px] bg-black text-[15px] font-normal text-white hover:bg-black/80"
      >
        {filterSubmit}
      </Button>
    </form>
  )
}

/** Green search bar that overlaps the hero's bottom edge, with its tab strip. */
export function FilterBar() {
  const [active, setActive] = useState<TabId>('rent')

  return (
    <section aria-label="Property search" className="relative z-20 -mt-[46px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div role="tablist" aria-label="Listing type" className="flex">
          {filterTabs.map((tab) => {
            const selected = active === tab.id
            return (
              <button
                key={tab.id}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${tab.id}-panel`}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'px-5 py-[11px] text-[15px] transition-colors',
                  selected ? 'bg-brand text-white' : 'bg-white text-brand hover:bg-white/90',
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="bg-brand pb-10">
        <div className="mx-auto max-w-[1140px] px-4 pt-8">
          {filterTabs.map((tab) => (
            <div
              key={`panel-${tab.id}`}
              id={`${tab.id}-panel`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              hidden={active !== tab.id}
            >
              <SearchForm
                idPrefix={tab.id}
                legend={`${tab.label} property search`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
