import { Calendar, ChevronDown, Search } from 'lucide-react'
import {
  checkInLabel,
  checkInPlaceholder,
  checkOutLabel,
  checkOutPlaceholder,
  destinationLabel,
  destinationPlaceholder,
  priceLabel,
  priceOptions,
  searchButtonLabel,
  searchSectionLabel,
} from '../data'

export function SearchPanel() {
  return (
    <section
      id="search-section"
      aria-label={searchSectionLabel}
      className="relative z-10 -mt-20 px-6"
    >
      <div className="mx-auto grid max-w-[1200px] gap-4 rounded-md bg-panel p-4 shadow-[0_75px_94px_-66px_rgba(0,0,0,0.66)] md:grid-cols-5">
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label htmlFor="search-destination" className="block text-[18px] text-white/80">
              {destinationLabel}
            </label>
            <input
              id="search-destination"
              type="text"
              placeholder={destinationPlaceholder}
              className="w-full bg-transparent py-1 text-base text-white/40 outline-none placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label htmlFor="search-checkin" className="block text-[18px] text-white/80">
              {checkInLabel}
            </label>
            <input
              id="search-checkin"
              type="text"
              placeholder={checkInPlaceholder}
              className="w-full bg-transparent py-1 text-base text-white/40 outline-none placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label htmlFor="search-checkout" className="block text-[18px] text-white/80">
              {checkOutLabel}
            </label>
            <input
              id="search-checkout"
              type="text"
              placeholder={checkOutPlaceholder}
              className="w-full bg-transparent py-1 text-base text-white/40 outline-none placeholder:text-white/40"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ChevronDown className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <label htmlFor="search-price" className="block text-[18px] text-white/80">
              {priceLabel}
            </label>
            <select
              id="search-price"
              className="w-full appearance-none bg-transparent py-1 text-base text-white/40 outline-none"
            >
              {priceOptions.map((option) => (
                <option key={option} value={option} className="text-black">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-stretch">
          <button
            type="button"
            className="w-full bg-brand px-4 py-[22px] text-base font-medium text-black transition-colors hover:bg-brand/90"
          >
            {searchButtonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}
