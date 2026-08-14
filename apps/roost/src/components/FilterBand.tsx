import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { FILTER_FIELDS, FILTER_TABS } from '../data'

interface FilterBandProps {
  rentLabel?: string
  saleLabel?: string
  submitLabel?: string
}

/* Filter band (source: div.realestate-filter — solid brand-green band
   overlapping the hero's bottom edge; For Rent / For Sale pill tabs, a
   grid of selects + text inputs, and a tall black Submit button). Both
   tab panes hold the same field set; switching tabs swaps the visible
   pane. */
export function FilterBand({
  rentLabel = FILTER_TABS[0],
  saleLabel = FILTER_TABS[1],
  submitLabel = 'Submit',
}: FilterBandProps) {
  const [tab, setTab] = useState(0)

  return (
    <section className="relative z-[6] -mt-10 bg-brand pb-8" aria-label="Property search">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="flex gap-2 pt-0" role="tablist" aria-label="Rent or sale">
          <button
            type="button"
            role="tab"
            id="rent-tab"
            aria-selected={tab === 0}
            aria-controls="for-rent"
            onClick={() => setTab(0)}
            className={cn(
              'inline-block px-5 py-[10px] transition-colors',
              tab === 0 ? 'bg-brand text-white' : 'bg-white text-brand',
            )}
          >
            {rentLabel}
          </button>
          <button
            type="button"
            role="tab"
            id="sale-tab"
            aria-selected={tab === 1}
            aria-controls="for-sale"
            onClick={() => setTab(1)}
            className={cn(
              'inline-block px-5 py-[10px] transition-colors',
              tab === 1 ? 'bg-brand text-white' : 'bg-white text-brand',
            )}
          >
            {saleLabel}
          </button>
        </div>

        <div
          id={tab === 0 ? 'for-rent' : 'for-sale'}
          role="tabpanel"
          aria-labelledby={tab === 0 ? 'rent-tab' : 'sale-tab'}
          className="mt-6"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="sr-only">Property type</span>
              <select
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none focus:border-2 focus:border-white"
                defaultValue={FILTER_FIELDS.types[0]}
              >
                {FILTER_FIELDS.types.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Bedrooms</span>
              <select
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none focus:border-2 focus:border-white"
                defaultValue={FILTER_FIELDS.bedrooms[0]}
              >
                {FILTER_FIELDS.bedrooms.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Bathrooms</span>
              <select
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none focus:border-2 focus:border-white"
                defaultValue={FILTER_FIELDS.bathrooms[0]}
              >
                {FILTER_FIELDS.bathrooms.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Minimum price</span>
              <select
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none focus:border-2 focus:border-white"
                defaultValue={FILTER_FIELDS.minPrice[0]}
              >
                {FILTER_FIELDS.minPrice.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Maximum price</span>
              <select
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none focus:border-2 focus:border-white"
                defaultValue={FILTER_FIELDS.maxPrice[0]}
              >
                {FILTER_FIELDS.maxPrice.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="sr-only">Title</span>
              <input
                type="text"
                placeholder="Title"
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none placeholder:text-gray-400 focus:border-2 focus:border-white"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="sr-only">Address</span>
              <input
                type="text"
                placeholder="Address"
                className="h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none placeholder:text-gray-400 focus:border-2 focus:border-white"
              />
            </label>

            <button
              type="button"
              className="h-[55px] w-full bg-ink text-[16px] font-medium text-white transition-colors hover:bg-black/80"
            >
              {submitLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
