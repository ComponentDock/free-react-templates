import type { BookingData } from '../types'
import { DAY_OPTIONS, MONTH_OPTIONS, YEAR_OPTIONS } from '../types'

interface PersonalInfoStepProps {
  data: BookingData
  onChange: (field: keyof BookingData, value: string) => void
}

export function PersonalInfoStep({ data, onChange }: PersonalInfoStepProps) {
  return (
    <div>
      <div className="flex items-center justify-between pb-9">
        <h3 className="text-3xl font-bold text-white">Personal Info</h3>
        <span className="text-lg text-gray-400">1/3</span>
      </div>

      <div className="flex gap-8 pb-6">
        <div className="w-1/2">
          <label className="block pb-2 text-sm font-normal text-white">First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base font-normal text-white outline-none placeholder:text-white focus:border-brand-accent"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block pb-2 text-sm font-normal text-white">Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base font-normal text-white outline-none placeholder:text-white focus:border-brand-accent"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div className="flex gap-8 pb-6">
        <div className="w-1/2">
          <label className="block pb-2 text-sm font-normal text-white">Phone Number</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base font-normal text-white outline-none placeholder:text-white focus:border-brand-accent"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block pb-2 text-sm font-normal text-white">E-Mail</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base font-normal text-white outline-none placeholder:text-white focus:border-brand-accent"
            placeholder="E-Mail"
            required
          />
        </div>
      </div>

      <div className="pb-6">
        <label className="mb-2 block text-sm font-normal text-white">Date of Birth:</label>
        <div className="flex gap-5">
          <select
            value={data.dobDay}
            onChange={(e) => onChange('dobDay', e.target.value)}
            className="w-auto rounded-md border-b border-white/30 bg-transparent py-3 px-3 text-base text-white outline-none focus:border-brand-accent"
          >
            {DAY_OPTIONS.map((d) => (
              <option key={d} value={d} className="text-gray-600">
                {d}
              </option>
            ))}
          </select>
          <select
            value={data.dobMonth}
            onChange={(e) => onChange('dobMonth', e.target.value)}
            className="w-auto rounded-md border-b border-white/30 bg-transparent py-3 px-3 text-base text-white outline-none focus:border-brand-accent"
          >
            {MONTH_OPTIONS.map((m) => (
              <option key={m} value={m} className="text-gray-600">
                {m}
              </option>
            ))}
          </select>
          <select
            value={data.dobYear}
            onChange={(e) => onChange('dobYear', e.target.value)}
            className="w-auto rounded-md border-b border-white/30 bg-transparent py-3 px-3 text-base text-white outline-none focus:border-brand-accent"
          >
            {YEAR_OPTIONS.map((y) => (
              <option key={y} value={y} className="text-gray-600">
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block pb-2 text-sm font-normal text-white">Address Location</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => onChange('address', e.target.value)}
          className="w-full border-b border-white/30 bg-transparent py-3 px-0 text-base font-normal text-white outline-none placeholder:text-white focus:border-brand-accent"
          placeholder="Address Location"
          required
        />
      </div>
    </div>
  )
}
