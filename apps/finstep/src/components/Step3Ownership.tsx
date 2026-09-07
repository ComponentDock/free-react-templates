import type { FormData } from '../App'
import { FloatingInput } from './FloatingInput'
import { FloatingSelect } from './FloatingSelect'

interface Step3OwnershipProps {
  data: FormData
  onChange: (updates: Partial<FormData>) => void
}

const POSITION_OPTIONS = [
  { value: 'ceo', label: 'CEO' },
  { value: 'cfo', label: 'CFO' },
  { value: 'cto', label: 'CTO' },
  { value: 'owner', label: 'Owner' },
  { value: 'partner', label: 'Partner' },
  { value: 'director', label: 'Director' },
  { value: 'manager', label: 'Manager' },
]

const BUSINESS_AREA_OPTIONS = [
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'operations', label: 'Operations' },
  { value: 'finance', label: 'Finance' },
  { value: 'technology', label: 'Technology' },
  { value: 'human_resources', label: 'Human Resources' },
  { value: 'legal', label: 'Legal' },
]

const DAY_OPTIONS = Array.from({ length: 31 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1),
}))

const MONTH_OPTIONS = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
]

const YEAR_OPTIONS = Array.from({ length: 100 }, (_, i) => ({
  value: String(2026 - i),
  label: String(2026 - i),
}))

export function Step3Ownership({ data, onChange }: Step3OwnershipProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-heading">More About Yourself</h2>
      <div className="flex gap-4">
        <FloatingInput
          id="step3-ownerFirstName"
          label="First Name"
          value={data.ownerFirstName}
          onChange={(v) => onChange({ ownerFirstName: v })}
          required
        />
        <FloatingInput
          id="step3-ownerLastName"
          label="Last Name"
          value={data.ownerLastName}
          onChange={(v) => onChange({ ownerLastName: v })}
          required
        />
      </div>
      <FloatingSelect
        id="step3-position"
        label="Position"
        value={data.position}
        onChange={(v) => onChange({ position: v })}
        options={POSITION_OPTIONS}
        required
      />
      <FloatingSelect
        id="step3-businessArea"
        label="Business Area"
        value={data.businessArea}
        onChange={(v) => onChange({ businessArea: v })}
        options={BUSINESS_AREA_OPTIONS}
        required
      />
      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-heading">Date of Birth</p>
        <div className="flex gap-3">
          <FloatingSelect
            id="step3-dobDay"
            label="Day"
            value={data.dobDay}
            onChange={(v) => onChange({ dobDay: v })}
            options={DAY_OPTIONS}
            required
          />
          <FloatingSelect
            id="step3-dobMonth"
            label="Month"
            value={data.dobMonth}
            onChange={(v) => onChange({ dobMonth: v })}
            options={MONTH_OPTIONS}
            required
          />
          <FloatingSelect
            id="step3-dobYear"
            label="Year"
            value={data.dobYear}
            onChange={(v) => onChange({ dobYear: v })}
            options={YEAR_OPTIONS}
            required
          />
        </div>
      </div>
    </div>
  )
}
