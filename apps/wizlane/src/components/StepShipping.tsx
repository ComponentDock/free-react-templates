import { MapPin, User, Phone } from 'lucide-react'
import { FormField } from './FormField'

export interface ShippingData {
  fullName: string
  address: string
  city: string
  postalCode: string
  phone: string
  country: string
}

export interface StepShippingProps {
  data: ShippingData
  onChange: (data: ShippingData) => void
  errors: Partial<Record<keyof ShippingData, string>>
}

export function StepShipping({ data, onChange, errors }: StepShippingProps) {
  const update = (key: keyof ShippingData, value: string) => onChange({ ...data, [key]: value })

  return (
    <section aria-labelledby="step-shipping-heading">
      <h3
        id="step-shipping-heading"
        className="mb-7 text-center text-lg font-black uppercase tracking-widest text-surface-800"
      >
        Shipping Details
      </h3>
      <div className="flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="fullName"
          placeholder="Full Name"
          icon={<User className="h-4 w-4" />}
          value={data.fullName}
          onChange={(v) => update('fullName', v)}
          error={errors.fullName}
          required
        />
        <FormField
          label="phone"
          placeholder="Phone Number"
          icon={<Phone className="h-4 w-4" />}
          value={data.phone}
          onChange={(v) => update('phone', v)}
          error={errors.phone}
          type="tel"
          required
        />
      </div>
      <div className="mt-5">
        <FormField
          label="address"
          placeholder="Street Address"
          icon={<MapPin className="h-4 w-4" />}
          value={data.address}
          onChange={(v) => update('address', v)}
          error={errors.address}
          required
          half={false}
        />
      </div>
      <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-5">
        <FormField
          label="shippingCity"
          placeholder="City"
          icon={<MapPin className="h-4 w-4" />}
          value={data.city}
          onChange={(v) => update('city', v)}
          error={errors.city}
          required
        />
        <FormField
          label="postalCode"
          placeholder="Postal Code"
          icon={<MapPin className="h-4 w-4" />}
          value={data.postalCode}
          onChange={(v) => update('postalCode', v)}
          error={errors.postalCode}
          required
        />
        <FormField
          label="shippingCountry"
          placeholder="Country"
          icon={<MapPin className="h-4 w-4" />}
          value={data.country}
          onChange={(v) => update('country', v)}
          error={errors.country}
          required
        />
      </div>
    </section>
  )
}
