import type { WizardData } from '../types'
import type { ChangeEvent } from 'react'

interface AccountStepProps {
  data: WizardData
  onChange: (field: keyof WizardData, value: string) => void
}

export function AccountStep({ data, onChange }: AccountStepProps) {
  return (
    <div>
      <h2 className="uppercase text-base font-bold text-center pt-8 pb-6 m-0">
        Create your account
      </h2>
      <div className="space-y-5">
        <div className="relative pb-5">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Eg: aucreative@gmail.com"
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('email', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="password"
            id="password"
            name="password"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Password"
            value={data.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('password', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange('confirmPassword', e.target.value)
            }
          />
        </div>
      </div>
    </div>
  )
}
