import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full bg-white px-8 py-10 md:w-[60%]">
      <h2 className="mb-6 text-2xl font-semibold text-[#333333]">Send Us A Message</h2>

      {submitted ? (
        <div className="rounded border border-[#28a745]/20 bg-[#28a745]/10 p-6 text-center">
          <p className="text-lg font-medium text-[#28a745]">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name row */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#666666]">
              Tell Us Your Name <span className="text-[#f44336]">*</span>
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className={cn(
                  'w-full rounded border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#333333] placeholder-[#999999] outline-none transition-colors focus:border-[#28a745]',
                )}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className={cn(
                  'w-full rounded border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#333333] placeholder-[#999999] outline-none transition-colors focus:border-[#28a745]',
                )}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#666666]">
              Enter Your Email <span className="text-[#f44336]">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Eg. example@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className={cn(
                'w-full rounded border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#333333] placeholder-[#999999] outline-none transition-colors focus:border-[#28a745]',
              )}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#666666]">
              Enter Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Eg. +1 800 000000"
              value={formData.phone}
              onChange={handleChange}
              className={cn(
                'w-full rounded border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#333333] placeholder-[#999999] outline-none transition-colors focus:border-[#28a745]',
              )}
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#666666]">
              Message <span className="text-[#f44336]">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Write us a message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={cn(
                'w-full resize-none rounded border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#333333] placeholder-[#999999] outline-none transition-colors focus:border-[#28a745]',
              )}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className={cn(
                'rounded bg-[#28a745] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#218838]',
              )}
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
