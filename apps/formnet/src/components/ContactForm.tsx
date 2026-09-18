import { useState, type FormEvent } from 'react'
import { User, Mail, Phone, Send } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  copyMail: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = 'Name is required'
  if (!data.email.trim()) {
    errors.email = 'Valid email is required: ex@abc.xyz'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Valid email is required: ex@abc.xyz'
  }
  if (!data.phone.trim()) errors.phone = 'Phone is required'
  if (!data.message.trim()) errors.message = 'Message is required'
  return errors
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    copyMail: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  return (
    <form className="w-full" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <h1 className="pb-9 text-left font-medium text-[--color-heading]">Get in Touch</h1>

      {/* Name */}
      <div className="relative mb-[17px] bg-white">
        <label
          htmlFor="formnet-name"
          className="absolute left-0 top-0 flex h-[62px] w-[58px] cursor-pointer items-center justify-center text-[--color-placeholder]"
        >
          <User size={18} />
        </label>
        <input
          id="formnet-name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          className="h-[62px] w-full bg-transparent pl-[58px] pr-5 font-medium text-[--color-heading] placeholder:text-[--color-placeholder]"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-sm border border-[--color-error] bg-white px-2.5 py-1 text-[13px] text-[--color-error]">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="relative mb-[17px] bg-white">
        <label
          htmlFor="formnet-email"
          className="absolute left-0 top-0 flex h-[62px] w-[58px] cursor-pointer items-center justify-center text-[--color-placeholder]"
        >
          <Mail size={18} />
        </label>
        <input
          id="formnet-email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          className="h-[62px] w-full bg-transparent pl-[58px] pr-5 font-medium text-[--color-heading] placeholder:text-[--color-placeholder]"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-sm border border-[--color-error] bg-white px-2.5 py-1 text-[13px] text-[--color-error]">
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="relative mb-[17px] bg-white">
        <label
          htmlFor="formnet-phone"
          className="absolute left-0 top-0 flex h-[62px] w-[58px] cursor-pointer items-center justify-center text-[--color-placeholder]"
        >
          <Phone size={18} />
        </label>
        <input
          id="formnet-phone"
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          className="h-[62px] w-full bg-transparent pl-[58px] pr-5 font-medium text-[--color-heading] placeholder:text-[--color-placeholder]"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded-sm border border-[--color-error] bg-white px-2.5 py-1 text-[13px] text-[--color-error]">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="relative mb-[17px] bg-white">
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className="min-h-[199px] w-full resize-none bg-transparent px-5 pt-[19px] font-medium text-[--color-heading] placeholder:text-[--color-placeholder]"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="pointer-events-none absolute right-2 top-[19px] -translate-y-0 rounded-sm border border-[--color-error] bg-white px-2.5 py-1 text-[13px] text-[--color-error]">
            {errors.message}
          </span>
        )}
      </div>

      {/* Checkbox */}
      <div className="pb-5 pt-3">
        <label className="relative cursor-pointer pl-8 text-[15px] text-[--color-heading]">
          <input
            type="checkbox"
            name="copy-mail"
            checked={formData.copyMail}
            onChange={(e) => updateField('copyMail', e.target.checked)}
            className="peer sr-only"
          />
          <span className="absolute left-0 top-1/2 flex h-[22px] w-[22px] -translate-y-1/2 items-center justify-center rounded-sm border border-gray-300 bg-white peer-checked:bg-gray-500 peer-checked:text-white">
            {formData.copyMail && <span className="text-xs">✓</span>}
          </span>
          Send copy to my-email
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-[13px]">
        <div className="relative z-10 overflow-hidden rounded-[31px]">
          <div className="absolute inset-0 -left-full z-[-1] h-full w-[300%] bg-gradient-to-br from-[--color-btn-start] via-[--color-btn-end] to-[--color-btn-start] transition-all duration-400 group-hover:left-0" />
          <button
            type="submit"
            className="flex min-w-[160px] items-center justify-center gap-2 bg-gradient-to-br from-[--color-btn-start] via-[--color-btn-end] to-[--color-btn-start] px-5 py-0 font-medium text-white"
            style={{ height: '62px' }}
          >
            <Send size={16} />
            Send Email
          </button>
        </div>
      </div>

      {/* Success message */}
      {submitted && (
        <div className="mt-4 rounded-md bg-green-50 p-4 text-center text-green-700" role="status">
          Thank you! Your message has been sent.
        </div>
      )}
    </form>
  )
}
