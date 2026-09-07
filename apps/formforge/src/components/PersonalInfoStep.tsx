import type { FormData } from '../types'

interface PersonalInfoStepProps {
  data: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function PersonalInfoStep({ data, onChange }: PersonalInfoStepProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-brand-label">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          value={data.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Enter your full name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-label">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="w-full rounded-[3px] border border-brand-border px-3 py-2 text-brand-text outline-none focus:border-brand-green"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  )
}
