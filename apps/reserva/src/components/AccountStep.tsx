import type { BookingData } from '../types'
import type { ChangeEvent } from 'react'

interface AccountStepProps {
  data: BookingData
  onChange: (field: keyof BookingData, value: string | boolean) => void
}

export function AccountStep({ data, onChange }: AccountStepProps) {
  return (
    <div className="pt-[60px]">
      <div className="grid grid-cols-2 gap-5">
        <div className="relative pb-5">
          <label htmlFor="email" className="block w-full text-[15px] font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full box-border bg-transparent border border-brand-border rounded-none h-[50px] px-5 py-[15px] font-['Poppins',sans-serif] text-[15px] font-medium text-brand-text placeholder:text-brand-muted placeholder:text-[13px] focus:border-brand-blue focus:outline-none"
            placeholder=""
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('email', e.target.value)}
          />
        </div>

        <div className="relative pb-5">
          <label htmlFor="country" className="block w-full text-[15px] font-medium">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="w-full box-border bg-transparent border border-brand-border rounded-none h-[50px] px-5 py-[15px] font-['Poppins',sans-serif] text-[15px] font-medium text-brand-text focus:border-brand-blue focus:outline-none appearance-none cursor-pointer"
            value={data.country}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('country', e.target.value)}
          >
            <option value="">Select country</option>
            <option value="Vn">Viet Nam</option>
            <option value="US">United States America</option>
          </select>
        </div>

        <div className="relative pb-5">
          <label htmlFor="password" className="block w-full text-[15px] font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full box-border bg-transparent border border-brand-border rounded-none h-[50px] px-5 py-[15px] font-['Poppins',sans-serif] text-[15px] font-medium text-brand-text placeholder:text-brand-muted placeholder:text-[13px] focus:border-brand-blue focus:outline-none"
            placeholder=""
            value={data.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange('password', e.target.value)}
          />
        </div>

        <div className="relative pb-5">
          <label htmlFor="budget" className="block w-full text-[15px] font-medium">
            Daily budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full box-border bg-transparent border border-brand-border rounded-none h-[50px] px-5 py-[15px] font-['Poppins',sans-serif] text-[15px] font-medium text-brand-text focus:border-brand-blue focus:outline-none appearance-none cursor-pointer"
            value={data.budget}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange('budget', e.target.value)}
          >
            <option value="">Select budget</option>
            <option value="40$">$40</option>
            <option value="60$">$60</option>
          </select>
        </div>
      </div>

      <div className="relative z-[99] pt-[105px]">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="newsletter"
            checked={data.newsletter}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              onChange('newsletter', e.target.checked)
            }
            className="mr-2.5"
          />
          <span className="text-[13px] font-normal text-brand-text">
            Subscribe to our newsletter
          </span>
        </label>
      </div>
    </div>
  )
}
