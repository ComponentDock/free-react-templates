import type { PersonalInfo, StepErrors } from '../types'

interface PersonalInfoStepProps {
  data: PersonalInfo
  errors: StepErrors
  onChange: (data: PersonalInfo) => void
}

export function PersonalInfoStep({ data, errors, onChange }: PersonalInfoStepProps) {
  return (
    <section aria-labelledby="personal-info-heading" className="space-y-5">
      <h2 id="personal-info-heading" className="text-xl font-bold text-brand-text">
        Personal Information
      </h2>

      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          placeholder="John Doe"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.fullName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="+1 (555) 123-4567"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-brand-text transition-colors focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone}
          </p>
        )}
      </div>
    </section>
  )
}
