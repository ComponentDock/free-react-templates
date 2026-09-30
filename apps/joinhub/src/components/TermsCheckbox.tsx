import { useState } from 'react'

export function TermsCheckbox() {
  const [checked, setChecked] = useState(true)

  return (
    <label className="flex cursor-pointer items-start gap-2 text-sm text-checkbox-text">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-input-border accent-brand-blue"
      />
      <span>
        I agree all statements in{' '}
        <a
          href="#terms"
          className="font-medium text-brand-blue underline hover:text-brand-blue-dark"
        >
          Terms of Service
        </a>
      </span>
    </label>
  )
}
