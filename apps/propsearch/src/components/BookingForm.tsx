import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface BookingFormData {
  location: string
  propertyType: string
  propertyStatus: string
  priceLimit: string
}

interface BookingFormProps {
  onSearch?: (data: BookingFormData) => void
}

const PROPERTY_TYPES = [
  { value: '', label: 'Type' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'office', label: '- Office' },
  { value: 'residential', label: 'Residential' },
  { value: 'villa', label: 'Villa' },
  { value: 'condominium', label: 'Condominium' },
  { value: 'apartment', label: 'Apartment' },
]

const PROPERTY_STATUSES = [
  { value: '', label: 'Type' },
  { value: 'rent', label: 'Rent' },
  { value: 'sale', label: 'Sale' },
]

const PRICE_LIMITS = [
  { value: '5000', label: '$5,000' },
  { value: '10000', label: '$10,000' },
  { value: '50000', label: '$50,000' },
  { value: '100000', label: '$100,000' },
  { value: '200000', label: '$200,000' },
  { value: '300000', label: '$300,000' },
  { value: '400000', label: '$400,000' },
  { value: '500000', label: '$500,000' },
  { value: '600000', label: '$600,000' },
  { value: '700000', label: '$700,000' },
  { value: '800000', label: '$800,000' },
  { value: '900000', label: '$900,000' },
  { value: '1000000', label: '$1,000,000' },
  { value: '2000000', label: '$2,000,000' },
]

export function BookingForm({ onSearch }: BookingFormProps) {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [propertyStatus, setPropertyStatus] = useState('')
  const [priceLimit, setPriceLimit] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.({ location, propertyType, propertyStatus, priceLimit })
  }

  return (
    <form
      aria-label="Property search form"
      onSubmit={handleSubmit}
      className="w-full bg-propsearch-form-bg"
    >
      <div className="flex flex-wrap px-5 py-5 md:px-[30px] md:py-0">
        {/* Location */}
        <div className="mb-4 w-full pr-0 py-2 md:mb-0 md:flex-1 md:px-[15px] md:py-6">
          <label
            htmlFor="location"
            className="mb-2 block text-[12px] font-bold uppercase tracking-[1px] text-propsearch-brand"
          >
            Location
          </label>
          <div className="relative">
            <input
              id="location"
              type="text"
              placeholder="City/Locality Name"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={cn(
                'h-[40px] w-full border border-black/5 bg-transparent px-[10px] pr-[25px] font-sans text-[14px] text-black',
                'placeholder:text-black focus:border-white focus:outline-none',
              )}
            />
            <span className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-black/30">
              <Search className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-4 w-full pr-0 py-2 md:mb-0 md:flex-1 md:px-[15px] md:py-6">
          <label
            htmlFor="property-type"
            className="mb-2 block text-[12px] font-bold uppercase tracking-[1px] text-propsearch-brand"
          >
            Property Type
          </label>
          <div className="relative">
            <select
              id="property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className={cn(
                'h-[40px] w-full appearance-none border border-black/5 bg-transparent px-[10px] pr-[25px] font-sans text-[14px] text-black',
                'focus:border-white focus:outline-none',
              )}
            >
              {PROPERTY_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-black/30">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Property Status */}
        <div className="mb-4 w-full pr-0 py-2 md:mb-0 md:flex-1 md:px-[15px] md:py-6">
          <label
            htmlFor="property-status"
            className="mb-2 block text-[12px] font-bold uppercase tracking-[1px] text-propsearch-brand"
          >
            Property Status
          </label>
          <div className="relative">
            <select
              id="property-status"
              value={propertyStatus}
              onChange={(e) => setPropertyStatus(e.target.value)}
              className={cn(
                'h-[40px] w-full appearance-none border border-black/5 bg-transparent px-[10px] pr-[25px] font-sans text-[14px] text-black',
                'focus:border-white focus:outline-none',
              )}
            >
              {PROPERTY_STATUSES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-black/30">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Price Limit */}
        <div className="mb-4 w-full pr-0 py-2 md:mb-0 md:flex-1 md:px-[15px] md:py-6">
          <label
            htmlFor="price-limit"
            className="mb-2 block text-[12px] font-bold uppercase tracking-[1px] text-propsearch-brand"
          >
            Price Limit
          </label>
          <div className="relative">
            <select
              id="price-limit"
              value={priceLimit}
              onChange={(e) => setPriceLimit(e.target.value)}
              className={cn(
                'h-[40px] w-full appearance-none border border-black/5 bg-transparent px-[10px] pr-[25px] font-sans text-[14px] text-black',
                'focus:border-white focus:outline-none',
              )}
            >
              {PRICE_LIMITS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-black/30">
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex w-full items-stretch py-2 md:w-auto md:px-[15px]">
          <button
            type="submit"
            className={cn(
              'flex h-full w-full cursor-pointer items-center justify-center border-0 bg-propsearch-brand px-6 font-sans text-white',
              'transition-colors duration-300 hover:bg-propsearch-brand-hover md:h-[40px] md:w-auto',
            )}
          >
            <span className="text-center">
              <span className="block text-[14px] uppercase font-medium">Search Availability</span>
              <span className="block text-[14px] capitalize text-white">
                Best Price Guaranteed!
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  )
}
