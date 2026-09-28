import { useState, type FormEvent } from 'react'
import { User, Mail, Lock } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FieldProps {
  label: string
  type?: string
  icon: React.ReactNode
  value: string
  onChange: (v: string) => void
}

function Field({ label, type = 'text', icon, value, onChange }: FieldProps) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-base text-label">{label}</label>
      <div className="flex items-center">
        <span className="mr-3 text-label">{icon}</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          aria-label={label}
          className={cn(
            'w-full rounded border border-input-border bg-transparent px-[15px] py-[10.5px] text-lg text-heading placeholder-label outline-none focus:border-input-focus',
          )}
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

  return (
    <div className="mx-auto w-full max-w-[670px] rounded-lg bg-card-bg px-[45px] py-[30px] shadow-lg max-md:mx-5 max-md:mt-[175px]">
      <h2 className="mb-2 text-center text-[25px] font-bold text-heading">Register Account Form</h2>
      <div className="mx-auto mb-8 h-[2px] w-[50px] bg-brand" />

      <form onSubmit={handleSubmit} className="space-y-2" aria-label="Register account form">
        <Field label="Full Name" icon={<User size={18} />} value={name} onChange={setName} />
        <Field
          label="Your Email"
          type="email"
          icon={<Mail size={18} />}
          value={email}
          onChange={setEmail}
        />
        <Field
          label="Password"
          type="password"
          icon={<Lock size={18} />}
          value={password}
          onChange={setPassword}
        />

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-[180px] cursor-pointer rounded-[5px] border-none bg-brand py-[14px] text-base font-medium text-btn-text shadow-[0px_5px_15px_rgba(0,0,0,0.2)] transition-colors hover:bg-brand-dark"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
