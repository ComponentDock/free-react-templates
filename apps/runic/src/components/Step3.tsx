import { PillInput } from './PillInput'

interface Step3Props {
  activeField: string | null
  onFocusField: (field: string) => void
  streetName: string
  streetNumber: string
  city: string
  country: string
  onStreetNameChange: (v: string) => void
  onStreetNumberChange: (v: string) => void
  onCityChange: (v: string) => void
  onCountryChange: (v: string) => void
}

export function Step3({
  activeField,
  onFocusField,
  streetName,
  streetNumber,
  city,
  country,
  onStreetNameChange,
  onStreetNumberChange,
  onCityChange,
  onCountryChange,
}: Step3Props) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <PillInput
            placeholder="Street Name"
            value={streetName}
            onChange={(e) => onStreetNameChange(e.target.value)}
            onFocus={() => onFocusField('streetName')}
            active={activeField === 'streetName'}
          />
        </div>
        <div className="w-1/2">
          <PillInput
            placeholder="Street Number"
            value={streetNumber}
            onChange={(e) => onStreetNumberChange(e.target.value)}
            onFocus={() => onFocusField('streetNumber')}
            active={activeField === 'streetNumber'}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <PillInput
            placeholder="City"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            onFocus={() => onFocusField('city')}
            active={activeField === 'city'}
          />
        </div>
        <div className="w-1/2">
          <PillInput
            placeholder="Country"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            onFocus={() => onFocusField('country')}
            active={activeField === 'country'}
          />
        </div>
      </div>
    </div>
  )
}
