import type { FormData } from '../App'
import { FloatingInput } from './FloatingInput'

interface Step2AccountProps {
  data: FormData
  onChange: (updates: Partial<FormData>) => void
}

export function Step2Account({ data, onChange }: Step2AccountProps) {
  return (
    <div>
      <h2 className="mb-6 text-xl font-semibold text-heading">Do you have an account?</h2>
      <div className="mb-6 flex gap-6">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="accountType"
            value="existing"
            checked={data.accountType === 'individual'}
            onChange={() => onChange({ accountType: 'individual' })}
            className="h-4 w-4 accent-[#6bc734]"
          />
          <span className="text-heading">Existing</span>
        </label>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="accountType"
            value="newbie"
            checked={data.accountType === 'business'}
            onChange={() => onChange({ accountType: 'business' })}
            className="h-4 w-4 accent-[#6bc734]"
          />
          <span className="text-heading">Newbie</span>
        </label>
      </div>
      <FloatingInput
        id="step2-email"
        label="Email"
        value={data.email}
        onChange={(v) => onChange({ email: v })}
        type="email"
        required
      />
      <FloatingInput
        id="step2-password"
        label="Password"
        value={data.password}
        onChange={(v) => onChange({ password: v })}
        type="password"
        required
      />
      <FloatingInput
        id="step2-confirmPassword"
        label="Confirm Password"
        value={data.confirmPassword}
        onChange={(v) => onChange({ confirmPassword: v })}
        type="password"
        required
      />
    </div>
  )
}
