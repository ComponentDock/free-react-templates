import type { WizardData } from '../types'
import type { ChangeEvent } from 'react'

interface PersonalStepProps {
  data: WizardData
  onChange: (field: keyof WizardData, value: string) => void
}

export function PersonalStep({ data, onChange }: PersonalStepProps) {
  return (
    <div>
      <h2 className="uppercase text-base font-bold text-center pt-8 pb-6 m-0">Personal Details</h2>
      <div className="space-y-5">
        <div className="relative pb-5">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Your name"
            value={data.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('name', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Phone"
            value={data.phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('phone', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="text"
            id="address"
            name="address"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Address"
            value={data.address}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('address', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
