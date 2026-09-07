import type { WizardData } from '../types'
import type { ChangeEvent } from 'react'

interface SocialStepProps {
  data: WizardData
  onChange: (field: keyof WizardData, value: string) => void
}

export function SocialStep({ data, onChange }: SocialStepProps) {
  return (
    <div>
      <h2 className="uppercase text-base font-bold text-center pt-8 pb-6 m-0">Social profiles</h2>
      <div className="space-y-5">
        <div className="relative pb-5">
          <input
            type="text"
            id="twitter"
            name="twitter"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Twitter"
            value={data.twitter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('twitter', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="text"
            id="facebook"
            name="facebook"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Facebook"
            value={data.facebook}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('facebook', e.target.value)}
          />
        </div>
        <div className="relative pb-5">
          <input
            type="text"
            id="google"
            name="google"
            className="w-full box-border bg-transparent border border-brand-border rounded-[5px] h-10 px-5 py-[15px] font-['Poppins',sans-serif] text-[13px] font-medium text-brand-text placeholder:text-brand-muted focus:border-brand-light-blue focus:outline-none"
            placeholder="Google Plus"
            value={data.google}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('google', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
