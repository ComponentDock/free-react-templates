import { FloatingInput } from './FloatingInput'
import { SelectInput } from './SelectInput'
import type { HexData } from '../types'
import type { StepErrors } from '../validation'

interface PersonalStepProps {
  data: HexData
  errors: StepErrors
  onChange: (field: keyof HexData, value: string) => void
}

const days = Array.from({ length: 31 }, (_, i) => String(i + 1))
const months = Array.from({ length: 12 }, (_, i) => String(i + 1))
const years = Array.from({ length: 100 }, (_, i) => String(2025 - i))

export function PersonalStep({ data, errors, onChange }: PersonalStepProps) {
  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-[#333]">Personal Information:</h4>

      <div className="flex gap-4 max-sm:flex-col">
        <div className="flex-1">
          <FloatingInput
            id="firstName"
            label="First Name"
            value={data.firstName}
            onChange={(v) => onChange('firstName', v)}
            error={errors.firstName}
          />
        </div>
        <div className="flex-1">
          <FloatingInput
            id="lastName"
            label="Last Name"
            value={data.lastName}
            onChange={(v) => onChange('lastName', v)}
            error={errors.lastName}
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm text-[#666]">Gender</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={data.gender === 'Male'}
              onChange={() => onChange('gender', 'Male')}
              className="accent-[#24c1e8]"
            />
            <span className="text-sm text-[#333]">Male</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={data.gender === 'Female'}
              onChange={() => onChange('gender', 'Female')}
              className="accent-[#24c1e8]"
            />
            <span className="text-sm text-[#333]">Female</span>
          </label>
        </div>
        {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender}</p>}
      </div>

      <p className="mb-2 text-sm text-[#666]">Date of Birth</p>
      <div className="flex gap-4 max-sm:flex-col">
        <div className="flex-1">
          <SelectInput
            id="day"
            label="Day"
            value={data.day}
            onChange={(v) => onChange('day', v)}
            options={days}
            error={errors.day}
          />
        </div>
        <div className="flex-1">
          <SelectInput
            id="month"
            label="Month"
            value={data.month}
            onChange={(v) => onChange('month', v)}
            options={months}
            error={errors.month}
          />
        </div>
        <div className="flex-1">
          <SelectInput
            id="year"
            label="Year"
            value={data.year}
            onChange={(v) => onChange('year', v)}
            options={years}
            error={errors.year}
          />
        </div>
      </div>

      <FloatingInput
        id="phone"
        label="Phone Number"
        value={data.phone}
        onChange={(v) => onChange('phone', v)}
        error={errors.phone}
        type="tel"
      />
      <FloatingInput
        id="address"
        label="Address"
        value={data.address}
        onChange={(v) => onChange('address', v)}
        error={errors.address}
      />
    </div>
  )
}
