import type { FormData } from '../types'

interface AddressStepProps {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function AddressStep({ data, onChange }: AddressStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="buildingNumber" className="mb-1 block text-sm font-medium text-brand-label">
          Building Number
        </label>
        <input
          id="buildingNumber"
          type="text"
          value={data.buildingNumber}
          onChange={(e) => onChange('buildingNumber', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Building number"
        />
      </div>
      <div>
        <label htmlFor="street" className="mb-1 block text-sm font-medium text-brand-label">
          Street
        </label>
        <input
          id="street"
          type="text"
          value={data.street}
          onChange={(e) => onChange('street', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Street name"
        />
      </div>
      <div>
        <label htmlFor="town" className="mb-1 block text-sm font-medium text-brand-label">
          Town
        </label>
        <input
          id="town"
          type="text"
          value={data.town}
          onChange={(e) => onChange('town', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Town"
        />
      </div>
      <div>
        <label htmlFor="zipCode" className="mb-1 block text-sm font-medium text-brand-label">
          Zip code
        </label>
        <input
          id="zipCode"
          type="text"
          value={data.zipCode}
          onChange={(e) => onChange('zipCode', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Zip code"
        />
      </div>
    </div>
  )
}
