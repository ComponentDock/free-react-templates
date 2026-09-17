import { useState, type FormEvent, type ChangeEvent } from 'react'
import { ChevronDown, Check, X } from 'lucide-react'

interface FormState {
  fullName: string
  email: string
  phone: string
  services: string
  productType: string
  budget: number
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  services?: string
  productType?: string
  message?: string
}

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  phone: '',
  services: '',
  productType: '',
  budget: 2500,
  message: '',
}

const BUDGET_MIN = 500
const BUDGET_MAX = 10000

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, budget: Number(e.target.value) }))
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {}
    if (!form.fullName.trim()) {
      newErrors.fullName = 'Please Type Your Name'
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!form.services) {
      newErrors.services = 'Please select a service'
    }
    if (!form.productType) {
      newErrors.productType = 'Please select a product type'
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    }
    return newErrors
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
    setTouched({
      fullName: true,
      email: true,
      services: true,
      productType: true,
      message: true,
    })
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleReset() {
    setForm(INITIAL_FORM)
    setErrors({})
    setTouched({})
    setSubmitted(false)
  }

  const budgetPercent = ((form.budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100

  if (submitted) {
    return (
      <div
        className="w-full max-w-lg rounded-lg p-10 text-center"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        <h2 className="mb-4 text-2xl font-bold" style={{ color: '#222222' }}>
          Thank you!
        </h2>
        <p className="mb-6" style={{ color: '#666666' }}>
          Your message has been sent. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="rounded-lg px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#333333' }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div
      className="w-full max-w-lg rounded-lg p-10"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
      }}
    >
      <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: '#222222' }}>
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-6">
          {/* Full Name */}
          <FloatingField
            label="FULL NAME"
            htmlFor="fullName"
            required
            error={touched.fullName ? errors.fullName : undefined}
          >
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur('fullName')}
                className="w-full border-b bg-transparent py-2 pr-8 text-sm outline-none"
                style={{
                  color: '#333333',
                  borderColor: errors.fullName ? '#e74c3c' : '#e0e0e0',
                }}
                placeholder=" "
              />
              {form.fullName && !errors.fullName && (
                <Check
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  size={16}
                  style={{ color: '#27ae60' }}
                />
              )}
              {errors.fullName && (
                <X
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  size={16}
                  style={{ color: '#e74c3c' }}
                />
              )}
            </div>
            {touched.fullName && errors.fullName && (
              <p className="mt-1 text-xs" style={{ color: '#e74c3c' }}>
                {errors.fullName}
              </p>
            )}
          </FloatingField>

          {/* Email + Phone row */}
          <div className="grid grid-cols-2 gap-4">
            <FloatingField
              label="EMAIL"
              htmlFor="email"
              required
              error={touched.email ? errors.email : undefined}
            >
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className="w-full border-b bg-transparent py-2 pr-8 text-sm outline-none"
                  style={{
                    color: '#333333',
                    borderColor: errors.email ? '#e74c3c' : '#e0e0e0',
                  }}
                  placeholder=" "
                />
                {form.email && !errors.email && (
                  <Check
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    size={16}
                    style={{ color: '#27ae60' }}
                  />
                )}
              </div>
              {touched.email && errors.email && (
                <p className="mt-1 text-xs" style={{ color: '#e74c3c' }}>
                  {errors.email}
                </p>
              )}
            </FloatingField>

            <FloatingField label="PHONE" htmlFor="phone">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-b bg-transparent py-2 text-sm outline-none"
                style={{ color: '#333333', borderColor: '#e0e0e0' }}
                placeholder=" "
              />
            </FloatingField>
          </div>

          {/* Needed Services */}
          <FloatingField
            label="NEEDED SERVICES"
            htmlFor="services"
            required
            error={touched.services ? errors.services : undefined}
          >
            <div className="relative">
              <select
                id="services"
                name="services"
                required
                value={form.services}
                onChange={handleChange}
                onBlur={() => handleBlur('services')}
                className="w-full appearance-none border-b bg-transparent py-2 pr-8 text-sm outline-none"
                style={{
                  color: form.services ? '#333333' : '#aaaaaa',
                  borderColor: errors.services ? '#e74c3c' : '#e0e0e0',
                }}
              >
                <option value="" disabled hidden>
                  Select a service
                </option>
                <option value="ecommerce">eCommerce Business</option>
                <option value="web-design">Web Design</option>
                <option value="seo">SEO</option>
                <option value="branding">Branding</option>
                <option value="consulting">Consulting</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
                size={16}
                style={{ color: '#aaaaaa' }}
              />
            </div>
            {touched.services && errors.services && (
              <p className="mt-1 text-xs" style={{ color: '#e74c3c' }}>
                {errors.services}
              </p>
            )}
          </FloatingField>

          {/* Product Type Radio Group */}
          <fieldset>
            <legend
              className="mb-3 text-xs font-medium uppercase tracking-wider"
              style={{ color: '#999999' }}
            >
              What type of products do you sell?
            </legend>
            <div className="space-y-2">
              {[
                { value: 'physical', label: 'Physical Products' },
                { value: 'digital', label: 'Digital Products' },
                { value: 'services', label: 'Services Consulting' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                  style={{ color: '#333333' }}
                >
                  <input
                    type="radio"
                    name="productType"
                    value={option.value}
                    checked={form.productType === option.value}
                    onChange={handleChange}
                    onBlur={() => handleBlur('productType')}
                    className="h-4 w-4 accent-green-600"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {touched.productType && errors.productType && (
              <p className="mt-1 text-xs" style={{ color: '#e74c3c' }}>
                {errors.productType}
              </p>
            )}
          </fieldset>

          {/* Budget Range Slider */}
          <fieldset>
            <legend
              className="mb-1 text-xs font-medium uppercase tracking-wider"
              style={{ color: '#999999' }}
            >
              BUDGET
            </legend>
            <p className="mb-3 text-sm font-medium" style={{ color: '#333333' }}>
              ${form.budget.toLocaleString()} –{' '}
              {Math.min(form.budget + 2500, BUDGET_MAX).toLocaleString()}
            </p>
            <div className="relative">
              <input
                type="range"
                min={BUDGET_MIN}
                max={BUDGET_MAX}
                step={100}
                value={form.budget}
                onChange={handleSliderChange}
                className="budget-slider w-full"
                style={{
                  background: `linear-gradient(to right, #27ae60 0%, #27ae60 ${budgetPercent}%, #e0e0e0 ${budgetPercent}%, #e0e0e0 100%)`,
                }}
              />
            </div>
          </fieldset>

          {/* Message */}
          <FloatingField
            label="MESSAGE"
            htmlFor="message"
            error={touched.message ? errors.message : undefined}
          >
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              rows={4}
              className="w-full resize-none border-b bg-transparent py-2 text-sm outline-none"
              style={{
                color: '#333333',
                borderColor: errors.message ? '#e74c3c' : '#e0e0e0',
              }}
              placeholder="Your message here..."
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-xs" style={{ color: '#e74c3c' }}>
                {errors.message}
              </p>
            )}
          </FloatingField>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-lg py-3 text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ backgroundColor: '#333333' }}
        >
          Submit →
        </button>
      </form>
    </div>
  )
}

function FloatingField({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1 block text-xs font-medium uppercase tracking-wider"
        style={{ color: error ? '#e74c3c' : '#999999' }}
      >
        {label}
        {required && <span className="ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
