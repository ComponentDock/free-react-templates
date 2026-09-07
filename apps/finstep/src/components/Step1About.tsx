import type { FormData } from '../App'
import { FloatingInput } from './FloatingInput'

interface Step1AboutProps {
  data: FormData
  onChange: (updates: Partial<FormData>) => void
}

export function Step1About({ data, onChange }: Step1AboutProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-heading">Personal Information</h2>
      <div className="flex gap-4">
        <FloatingInput
          id="step1-firstName"
          label="First Name"
          value={data.firstName}
          onChange={(v) => onChange({ firstName: v })}
          required
        />
        <FloatingInput
          id="step1-lastName"
          label="Last Name"
          value={data.lastName}
          onChange={(v) => onChange({ lastName: v })}
          required
        />
      </div>
      <FloatingInput
        id="step1-address"
        label="Address"
        value={data.address}
        onChange={(v) => onChange({ address: v })}
        required
        style={{ width: '84.1%' }}
      />
      <div className="flex gap-4">
        <FloatingInput
          id="step1-zipCode"
          label="Zip Code"
          value={data.zipCode}
          onChange={(v) => onChange({ zipCode: v })}
          required
          style={{ width: '50%' }}
        />
        <FloatingInput
          id="step1-phone"
          label="Phone Number"
          value={data.phone}
          onChange={(v) => onChange({ phone: v })}
          type="tel"
          required
          style={{ width: '50%' }}
        />
      </div>
    </div>
  )
}
