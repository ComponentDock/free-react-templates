import { FloatingInput } from './FloatingInput'
import type { HexData } from '../types'
import type { StepErrors } from '../validation'

interface AboutStepProps {
  data: HexData
  errors: StepErrors
  onChange: (field: keyof HexData, value: string) => void
}

export function AboutStep({ data, errors, onChange }: AboutStepProps) {
  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-[#333]">Account Information:</h4>
      <FloatingInput
        id="email"
        label="Email Address"
        value={data.email}
        onChange={(v) => onChange('email', v)}
        error={errors.email}
        type="email"
      />
      <FloatingInput
        id="username"
        label="Username"
        value={data.username}
        onChange={(v) => onChange('username', v)}
        error={errors.username}
      />
      <FloatingInput
        id="password"
        label="Password"
        value={data.password}
        onChange={(v) => onChange('password', v)}
        error={errors.password}
        type="password"
      />
      <FloatingInput
        id="confirmPassword"
        label="Confirm Password"
        value={data.confirmPassword}
        onChange={(v) => onChange('confirmPassword', v)}
        error={errors.confirmPassword}
        type="password"
      />
    </div>
  )
}
