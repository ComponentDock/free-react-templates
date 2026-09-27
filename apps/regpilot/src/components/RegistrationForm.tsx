import { useState, type FormEvent } from 'react'
import { User, Mail, Lock } from 'lucide-react'

const GENDERS = ['Male', 'Female', 'Other', 'Prefer not to say']

interface FormFieldProps {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  icon?: React.ReactNode
}

function FormField({ label, type = 'text', value, onChange, required, icon }: FormFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-sm text-label">{label}</label>
      <div className="flex items-center border-b border-border">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={label}
          className="w-full bg-transparent py-2 text-sm text-heading placeholder-label/60 outline-none focus:border-brand"
          aria-label={label}
        />
        {icon && (
          <span className="text-label" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>
    </div>
  )
}

interface SelectFieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-sm text-label">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border-b border-border bg-transparent py-2 text-sm text-heading outline-none focus:border-brand"
        aria-label={label}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export function RegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (firstName && lastName && username && email && gender && password && confirmPassword) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-2xl rounded bg-card-bg p-10 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-heading">Thank You!</h2>
        <p className="text-sm text-label">
          Your registration has been submitted successfully. Welcome aboard!
        </p>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-2xl overflow-hidden rounded bg-card-bg shadow-xl">
      {/* Left side — hero image */}
      <div className="relative hidden w-1/2 md:block">
        <img
          src="https://picsum.photos/seed/regpilot-hero/600/800"
          alt="Registration hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <p className="absolute bottom-8 left-6 text-2xl font-bold text-white drop-shadow-lg">
          #Collection 2024
        </p>
      </div>

      {/* Right side — form */}
      <div className="w-full p-8 md:w-1/2 md:p-10">
        <h2 className="mb-8 text-lg font-bold uppercase tracking-wide text-heading">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} aria-label="Registration form" className="space-y-5">
          <div className="flex gap-4">
            <div className="w-1/2">
              <FormField label="First Name" value={firstName} onChange={setFirstName} required />
            </div>
            <div className="w-1/2">
              <FormField label="Last Name" value={lastName} onChange={setLastName} required />
            </div>
          </div>

          <FormField
            label="Username"
            value={username}
            onChange={setUsername}
            required
            icon={<User size={16} />}
          />
          <FormField
            label="Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            required
            icon={<Mail size={16} />}
          />
          <SelectField label="Gender" value={gender} onChange={setGender} options={GENDERS} />
          <FormField
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
            icon={<Lock size={16} />}
          />
          <FormField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            required
            icon={<Lock size={16} />}
          />

          {error && (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          )}

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
            >
              Register →
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
