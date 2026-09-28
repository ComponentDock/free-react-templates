import { useState, type FormEvent } from 'react'
import { User, Mail, Lock } from 'lucide-react'

interface FieldProps {
  label: string
  type?: string
  icon: React.ReactNode
  value: string
  onChange: (v: string) => void
  placeholder: string
}

export function Field({ label, type = 'text', icon, value, onChange, placeholder }: FieldProps) {
  return (
    <div>
      <div className="flex items-center rounded-full border border-input-border bg-input-bg px-5 py-3 transition-colors focus-within:border-input-focus">
        <span className="mr-3 text-white/60">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={label}
          className="w-full bg-transparent text-sm text-white placeholder-white/60 outline-none"
        />
      </div>
    </div>
  )
}

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function RegisterCard() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="relative mx-auto w-full max-w-[700px] overflow-hidden rounded-xl">
      {/* Concert crowd background image overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/groove-concert/800/500"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-card-bg/70" />
      </div>

      <div className="relative z-10 px-10 py-12 text-center max-md:px-6">
        <h2 className="mb-3 text-[28px] font-bold tracking-wide text-heading">Registration Form</h2>
        <div className="mx-auto mb-10 h-[2px] w-10 bg-white" />

        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Registration form">
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <Field
              label="Your Name"
              icon={<User size={16} />}
              value={name}
              onChange={setName}
              placeholder="Your Name"
            />
            <Field
              label="Your Email"
              type="email"
              icon={<Mail size={16} />}
              value={email}
              onChange={setEmail}
              placeholder="Your Email"
            />
            <Field
              label="Your Password"
              type="password"
              icon={<Lock size={16} />}
              value={password}
              onChange={setPassword}
              placeholder="Your Password"
            />
            <Field
              label="Confirm Password"
              type="password"
              icon={<Lock size={16} />}
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="cursor-pointer rounded-full border-none bg-brand px-12 py-3.5 text-sm font-bold tracking-wider text-btn-text shadow-lg transition-colors hover:bg-brand-dark"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
