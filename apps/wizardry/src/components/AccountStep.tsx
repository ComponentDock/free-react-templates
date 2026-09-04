import type { WizardData } from '../types'

interface AccountStepProps {
  data: WizardData
  errors: Partial<Record<keyof WizardData, string>>
  onChange: (field: keyof WizardData, value: string) => void
}

export function AccountStep({ data, errors, onChange }: AccountStepProps) {
  return (
    <div>
      <div className="bg-brand-sky rounded-md px-8 py-2.5 -mx-8 mb-6">
        <h3 className="text-white text-xl font-bold m-0">Account Setup</h3>
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-gray-600 text-base pb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block text-gray-600 text-base pb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => onChange('password', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.password}
          </p>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="confirmPassword" className="block text-gray-600 text-base pb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Password"
          value={data.confirmPassword}
          onChange={(e) => onChange('confirmPassword', e.target.value)}
          className={`w-full px-5 py-3 border rounded text-base font-semibold text-gray-800 outline-none focus:border-brand-sky ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
          }`}
          required
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.confirmPassword}
          </p>
        )}
      </div>
    </div>
  )
}
