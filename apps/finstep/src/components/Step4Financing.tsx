import type { FormData } from '../App'
import { FloatingSelect } from './FloatingSelect'
import { FloatingInput } from './FloatingInput'

interface Step4FinancingProps {
  data: FormData
  onChange: (updates: Partial<FormData>) => void
}

const INVENTORY_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
  { value: 'certified', label: 'Certified Pre-Owned' },
]

export function Step4Financing({ data, onChange }: Step4FinancingProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-heading">Financing Information</h2>
      <FloatingSelect
        id="step4-inventoryType"
        label="Buy Inventory"
        value={data.inventoryType}
        onChange={(v) => onChange({ inventoryType: v })}
        options={INVENTORY_OPTIONS}
        required
      />
      <div className="mb-6">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={data.existingFinancing}
            onChange={(e) => onChange({ existingFinancing: e.target.checked })}
            className="h-4 w-4 accent-[#6bc734]"
          />
          <span className="text-heading">Existing business financing?</span>
        </label>
      </div>
      <div className="mb-4">
        <h3 className="mb-4 text-lg font-semibold text-heading">Existing Balance</h3>
        <FloatingInput
          id="step4-businessName"
          label="Business Name"
          value={data.businessName}
          onChange={(v) => onChange({ businessName: v })}
          required
        />
        <FloatingInput
          id="step4-currentBalance"
          label="Current Balance"
          value={data.currentBalance}
          onChange={(v) => onChange({ currentBalance: v })}
          type="number"
          required
        />
      </div>
    </div>
  )
}
