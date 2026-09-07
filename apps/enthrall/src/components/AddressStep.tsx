import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AddressStepProps {
  streetName: string
  streetNumber: string
  city: string
  country: string
  onFieldChange: (field: string, value: string) => void
}

export function AddressStep({
  streetName,
  streetNumber,
  city,
  country,
  onFieldChange,
}: AddressStepProps) {
  return (
    <div
      id="step-panel-2"
      role="tabpanel"
      aria-labelledby="tab-2"
      className="flex flex-col gap-0 pt-[85px]"
    >
      {/* Row 1: Street Name + Street Number */}
      <div className="flex gap-5 max-[768px]:flex-col max-[768px]:gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="street_name" className="sr-only text-sm font-medium text-ink">
            Street Name
          </label>
          <input
            id="street_name"
            type="text"
            placeholder="Street Name"
            value={streetName}
            onChange={(e) => onFieldChange('streetName', e.target.value)}
            className="rounded-[5px] border border-line bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="street_number" className="sr-only text-sm font-medium text-ink">
            Street Number
          </label>
          <input
            id="street_number"
            type="text"
            placeholder="Street Number"
            value={streetNumber}
            onChange={(e) => onFieldChange('streetNumber', e.target.value)}
            className="rounded-[5px] border border-line bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* Row 2: City + Country */}
      <div className="mt-5 flex gap-5 max-[768px]:mt-4 max-[768px]:flex-col max-[768px]:gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="city" className="sr-only text-sm font-medium text-ink">
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => onFieldChange('city', e.target.value)}
            className="rounded-[5px] border border-line bg-transparent px-[25px] py-[15px] text-[14px] text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-0"
          />
        </div>
        <div className="relative flex flex-1 flex-col gap-1">
          <label htmlFor="country" className="sr-only text-sm font-medium text-ink">
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => onFieldChange('country', e.target.value)}
            className={cn(
              'appearance-none rounded-[5px] border border-line bg-transparent px-[25px] py-[15px] text-[14px] text-muted focus:border-accent focus:outline-none focus:ring-0',
              country ? 'text-ink' : 'text-muted',
            )}
          >
            <option value="">Country</option>
            <option value="vietnam">Viet Nam</option>
            <option value="usa">USA</option>
          </select>
          <span
            data-testid="country-caret"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            aria-hidden="true"
          >
            <ChevronDown className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  )
}
