import { useState } from 'react'
import { Check } from 'lucide-react'

export interface ContactFormProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function validateField(name: string, value: string): string | undefined {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required'
      return undefined
    case 'email':
      if (!value.trim()) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email'
      return undefined
    case 'phone':
      return undefined
    case 'message':
      return undefined
  }
}

function isFieldValid(name: string, value: string): boolean {
  return name === 'name' ? value.trim().length > 0 : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFocus = (name: string) => {
    setFocusedField(name)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: FormErrors = {}
    const fields = ['name', 'email', 'phone', 'message'] as const
    for (const field of fields) {
      const error = validateField(field, formData[field])
      if (error) newErrors[field] = error
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={`flex flex-col items-center justify-center bg-white p-8 ${className ?? ''}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-heading mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">Your message has been sent.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white p-6 md:p-10 ${className ?? ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-label mb-1">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-label focus:border-brand-coral focus:outline-none transition-colors"
              />
              {isFieldValid('name', formData.name) && (
                <Check
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-green"
                  size={18}
                  aria-label="Valid"
                />
              )}
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-label mb-1">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-label focus:border-brand-coral focus:outline-none transition-colors"
              />
              {isFieldValid('email', formData.email) && (
                <Check
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-green"
                  size={18}
                  aria-label="Valid"
                />
              )}
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-label mb-1">
              Phone
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                placeholder="Phone Number..."
                className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-label placeholder-placeholder focus:border-brand-coral focus:outline-none transition-colors"
              />
              {focusedField === 'phone' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-coral" />
              )}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-label mb-1">
              Message
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                placeholder="Questions/Comments..."
                rows={4}
                className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-label placeholder-placeholder focus:border-brand-coral focus:outline-none transition-colors resize-none"
              />
              {focusedField === 'message' && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-coral" />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full md:w-auto px-10 py-3 bg-gradient-to-r from-brand-coral to-brand-pink text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-md"
        >
          Send
        </button>
      </form>
    </div>
  )
}
