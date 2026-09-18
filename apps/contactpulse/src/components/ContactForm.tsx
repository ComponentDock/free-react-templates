import { useState } from 'react'
import { Check, X } from 'lucide-react'

export interface ContactFormProps {
  className?: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
}

function validateField(name: string, value: string): string | undefined {
  switch (name) {
    case 'firstName':
      if (!value.trim()) return 'First name is required'
      return undefined
    case 'lastName':
      if (!value.trim()) return 'Last name is required'
      return undefined
    case 'email':
      if (!value.trim()) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email'
      return undefined
    case 'phone':
      if (value && !/^\d+$/.test(value)) return 'Phone must contain only digits'
      return undefined
    case 'message':
      return undefined
  }
}

type FieldStatus = 'valid' | 'invalid' | 'none'

export function ContactForm({ className }: ContactFormProps) {
  void className
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [interacted, setInteracted] = useState<Record<string, boolean>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (name: string) => {
    setInteracted((prev) => ({ ...prev, [name]: true }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'] as const
    for (const field of requiredFields) {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    }
    setInteracted({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true,
    })
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-text-heading">Thank You!</h3>
        <p className="text-text-body">Your message has been sent.</p>
      </div>
    )
  }

  function getFieldDisplay(name: keyof FormData): { borderClass: string; icon: React.ReactNode } {
    const value = formData[name]
    const hasError = !!errors[name]
    if (hasError) {
      return {
        borderClass: 'border-brand-red',
        icon: (
          <X
            className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-red"
            size={16}
            aria-label="Invalid"
          />
        ),
      }
    }
    const isInteracted = interacted[name] ?? false
    if (!isInteracted || name === 'message') {
      return {
        borderClass: 'border-input-border focus:border-brand-dark',
        icon: null,
      }
    }
    let status: FieldStatus = 'none'
    if (name === 'phone') {
      status = value !== '' && !/^\d+$/.test(value) ? 'invalid' : 'none'
    }
    if (name === 'firstName' || name === 'lastName') {
      status = value.trim().length > 0 ? 'valid' : 'invalid'
    }
    if (name === 'email') {
      status = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'valid' : 'invalid'
    }
    const borderClass =
      status === 'invalid' ? 'border-brand-red' : 'border-input-border focus:border-brand-dark'
    const icon =
      status === 'invalid' ? (
        <X
          className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-red"
          size={16}
          aria-label="Invalid"
        />
      ) : status === 'valid' ? (
        <Check
          className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-green"
          size={16}
          aria-label="Valid"
        />
      ) : null
    return { borderClass, icon }
  }

  const renderInputField = (name: keyof FormData, inputType: string, placeholder?: string) => {
    const { borderClass, icon } = getFieldDisplay(name)
    const value = formData[name]
    const hasError = !!errors[name]

    return (
      <div className="relative">
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={() => handleBlur(name)}
          placeholder={placeholder}
          className={`w-full border-0 border-b bg-transparent py-2 text-sm text-text-heading focus:outline-none ${borderClass}`}
        />
        {icon}
        {hasError && <p className="mt-1 text-xs text-brand-red">{errors[name]}</p>}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name fields */}
      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Your Name <span className="text-brand-red">*</span>
        </label>
        <div className="flex gap-4">
          {renderInputField('firstName', 'text')}
          {renderInputField('lastName', 'text')}
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Email Address <span className="text-brand-red">*</span>
        </label>
        {renderInputField('email', 'email')}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Phone Number <span className="text-brand-red">*</span>
        </label>
        {renderInputField('phone', 'text')}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-label"
        >
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          rows={5}
          placeholder="Please enter your comments..."
          className="w-full resize-none rounded border border-input-border bg-textarea-bg px-4 py-3 text-sm text-text-heading placeholder-text-body focus:border-brand-dark focus:outline-none"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="rounded-full bg-brand-dark px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Submit →
        </button>
      </div>
    </form>
  )
}
