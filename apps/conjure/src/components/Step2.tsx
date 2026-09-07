import { FormInput } from './FormInput'
import { CountryDropdown } from './CountryDropdown'

export function Step2() {
  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: Address (full width) */}
      <FormInput label="Address" placeholder="Address" />

      {/* Row 2: City + Zip Code */}
      <div className="flex gap-4">
        <FormInput label="City" placeholder="City" className="flex-1" />
        <FormInput label="Zip Code" placeholder="Zip Code" className="flex-1" />
      </div>

      {/* Row 3: Country dropdown + spacer */}
      <div className="flex gap-4">
        <div className="flex-1">
          <CountryDropdown />
        </div>
        <div className="flex-1" />
      </div>
    </div>
  )
}
