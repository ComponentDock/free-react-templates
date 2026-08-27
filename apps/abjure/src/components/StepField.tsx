import { cn } from '@free-react-templates/ui'
import { Eye, EyeOff, CircleX } from 'lucide-react'

interface Step {
  name: string
  label: string
  type: string
  required: boolean
}

interface StepFieldProps {
  step: Step
  value: string
  error: boolean
  focused: boolean
  onChange: (val: string) => void
  onFocus: () => void
  onBlur: () => void
  showPassword: boolean
  onTogglePassword: () => void
}

export function StepField({
  step,
  value,
  error,
  focused,
  onChange,
  onFocus,
  onBlur,
  showPassword,
  onTogglePassword,
}: StepFieldProps) {
  const inputType = step.type === 'password' ? (showPassword ? 'text' : 'password') : step.type
  const hasValue = value.length > 0
  const labelFloating = focused || hasValue

  return (
    <fieldset className="relative border-none p-0" role="tabpanel">
      <div className="relative">
        <input
          id={step.name}
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-required={step.required || undefined}
          aria-invalid={error || undefined}
          className={cn(
            'w-full border-0 border-b-[3px] bg-transparent pb-[3px] pt-[30px] text-[22px] font-bold text-ink outline-none transition-colors',
            error ? 'border-error' : 'border-line focus:border-line',
          )}
        />
        <label
          htmlFor={step.name}
          className={cn(
            'pointer-events-none absolute left-0 transition-all duration-200',
            error
              ? 'top-1 text-[12px] font-medium text-error'
              : labelFloating
                ? 'top-1 text-[13px] font-medium text-label-dim'
                : 'top-[25px] text-[22px] font-bold text-ink',
            !focused && hasValue && !error ? 'hidden' : '',
          )}
        >
          {step.label}
        </label>
        {error && (
          <span className="absolute right-0 top-[30px] text-error" role="alert">
            <CircleX size={18} />
          </span>
        )}
        {step.type === 'password' && (
          <button
            type="button"
            onClick={onTogglePassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            aria-pressed={showPassword}
            className="absolute right-0 top-[3px] text-label-dim hover:text-ink"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </fieldset>
  )
}
