import { Lock, Eye } from 'lucide-react'
import { FormField } from './FormField'

export interface AccountData {
  currentPassword: string
  confirmPassword: string
  newPassword: string
  verifyPassword: string
}

export interface StepAccountProps {
  data: AccountData
  onChange: (data: AccountData) => void
  errors: Partial<Record<keyof AccountData, string>>
}

export function StepAccount({ data, onChange, errors }: StepAccountProps) {
  const update = (key: keyof AccountData, value: string) => onChange({ ...data, [key]: value })

  return (
    <section aria-labelledby="step-account-heading">
      <h3
        id="step-account-heading"
        className="mb-7 text-center text-lg font-black uppercase tracking-widest text-surface-800"
      >
        Account Security
      </h3>
      <div className="flex flex-col gap-5">
        <FormField
          label="currentPassword"
          placeholder="Current Password"
          icon={<Lock className="h-4 w-4" />}
          value={data.currentPassword}
          onChange={(v) => update('currentPassword', v)}
          error={errors.currentPassword}
          type="password"
          required
          half={false}
        />
        <FormField
          label="confirmCurrent"
          placeholder="Confirm Current Password"
          icon={<Eye className="h-4 w-4" />}
          value={data.confirmPassword}
          onChange={(v) => update('confirmPassword', v)}
          error={errors.confirmPassword}
          type="password"
          required
          half={false}
        />
        <FormField
          label="newPassword"
          placeholder="New Password"
          icon={<Lock className="h-4 w-4" />}
          value={data.newPassword}
          onChange={(v) => update('newPassword', v)}
          error={errors.newPassword}
          type="password"
          required
          half={false}
        />
        <FormField
          label="verifyNew"
          placeholder="Confirm New Password"
          icon={<Lock className="h-4 w-4" />}
          value={data.verifyPassword}
          onChange={(v) => update('verifyPassword', v)}
          error={errors.verifyPassword}
          type="password"
          required
          half={false}
        />
      </div>
    </section>
  )
}
