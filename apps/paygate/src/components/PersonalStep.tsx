import type { PersonalData } from '../App'

interface PersonalStepProps {
  data: PersonalData
  onChange: (data: PersonalData) => void
}

export function PersonalStep({ data, onChange }: PersonalStepProps) {
  return (
    <section aria-labelledby="step1-heading">
      <h2 id="step1-heading" className="mb-4 text-lg font-semibold" style={{ color: '#26282b' }}>
        Personal Information
      </h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1 block text-sm font-medium"
            style={{ color: '#26282b' }}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Enter your full name"
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
            style={{ borderColor: '#eee', color: '#26282b' }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium"
            style={{ color: '#26282b' }}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
            style={{ borderColor: '#eee', color: '#26282b' }}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium"
            style={{ color: '#26282b' }}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Enter your phone number"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className="w-full rounded border px-3 py-2 text-sm outline-none focus:border-[#1a73e8]"
            style={{ borderColor: '#eee', color: '#26282b' }}
          />
        </div>
      </div>
    </section>
  )
}
