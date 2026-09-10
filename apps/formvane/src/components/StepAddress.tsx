import { useState } from 'react'
import { MapPin, Home, MapPinHouse, Lock, Eye, EyeOff, ChevronDown } from 'lucide-react'

export interface AddressData {
  country: string
  streetAddress: string
  apartment: string
  townCity: string
  county: string
  postcodeZip: string
}

interface StepAddressProps {
  data: AddressData
  onChange: (data: AddressData) => void
}

const COUNTRIES = ['United States', 'United Kingdom', 'Viet Nam']

const inputFields = [
  {
    key: 'streetAddress' as const,
    label: 'Street Address',
    Icon: MapPin,
    placeholder: 'Street Address',
  },
  { key: 'apartment' as const, label: 'Apartment', Icon: Home, placeholder: 'Apartment' },
  { key: 'townCity' as const, label: 'Town / City', Icon: MapPinHouse, placeholder: 'Town / City' },
  { key: 'county' as const, label: 'County', Icon: MapPin, placeholder: 'County' },
]

export function StepAddress({ data, onChange }: StepAddressProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (key: keyof AddressData, value: string) => {
    onChange({ ...data, [key]: value })
  }

  return (
    <div>
      <h3
        className="mb-8 text-center text-[35px] font-semibold uppercase leading-tight tracking-[3px] text-brand-400"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Residential Address
      </h3>
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
        <div className="w-full sm:w-1/2">
          <label
            className="mb-1.5 block text-sm text-surface-800"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Country
          </label>
          <div className="relative">
            <select
              value={data.country}
              onChange={(e) => handleChange('country', e.target.value)}
              className="h-[42px] w-full appearance-none border border-surface-400 bg-transparent pl-[46px] pr-10 text-sm font-medium text-surface-600 outline-none transition-colors focus:border-brand-400"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-surface-400"
              size={18}
            />
          </div>
        </div>
        {inputFields.map((field) => (
          <div key={field.key} className="w-full sm:w-1/2">
            <label
              className="mb-1.5 block text-sm text-surface-800"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {field.label}
            </label>
            <div className="relative">
              <field.Icon
                className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400"
                size={18}
              />
              <input
                type="text"
                value={data[field.key]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="h-[42px] w-full border border-surface-400 bg-transparent pl-[46px] text-sm font-medium text-surface-600 outline-none transition-colors placeholder:text-surface-400 focus:border-brand-400"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
            </div>
          </div>
        ))}
        <div className="w-full sm:w-1/2">
          <label
            className="mb-1.5 block text-sm text-surface-800"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Postcode / Zip
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-surface-400" size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              value={data.postcodeZip}
              onChange={(e) => handleChange('postcodeZip', e.target.value)}
              placeholder="Postcode / Zip"
              className="h-[42px] w-full border border-surface-400 bg-transparent pl-[46px] text-sm font-medium text-surface-600 outline-none transition-colors placeholder:text-surface-400 focus:border-brand-400"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-400 transition-colors hover:text-surface-600"
              aria-label={showPassword ? 'Hide postcode' : 'Show postcode'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
