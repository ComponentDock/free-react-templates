import { useState } from 'react'

interface FormData {
  fullName: string
  email: string
  message: string
  cvFile: File | null
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
  cvFile?: string
}

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50 MB

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: '',
    cvFile: null,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      console.log('Application submitted:', formData)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    if (file && file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        cvFile: 'File size must be less than 50 MB',
      }))
      setFormData((prev) => ({ ...prev, cvFile: null }))
      // Reset the input so the same oversized file can be re-selected
      e.target.value = ''
      return
    }
    setErrors((prev) => ({ ...prev, cvFile: undefined }))
    setFormData((prev) => ({ ...prev, cvFile: file }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded bg-white px-10 py-10 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
    >
      {/* Full name */}
      <div className="mb-6">
        <label htmlFor="fullName" className="mb-2 block text-[15px] font-semibold text-[#333333]">
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value })
            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
          }}
          className="w-full rounded border border-[#DEE2E6] bg-white px-4 py-2.5 text-sm text-[#212529] placeholder-[#6C757D]"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="mb-2 block text-[15px] font-semibold text-[#333333]">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
          }}
          className="w-full rounded border border-[#DEE2E6] bg-white px-4 py-2.5 text-sm text-[#212529] placeholder-[#6C757D]"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="mb-2 block text-[15px] font-semibold text-[#333333]">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message sent to the employer"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value })
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
          }}
          className="w-full resize-y rounded border border-[#DEE2E6] bg-white px-4 py-2.5 text-sm text-[#212529] placeholder-[#6C757D]"
          style={{ minHeight: '120px' }}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* CV Upload */}
      <div className="mb-6">
        <label htmlFor="cvFile" className="mb-2 block text-[15px] font-semibold text-[#333333]">
          Upload CV
        </label>
        <input
          id="cvFile"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="w-full text-sm text-[#212529]"
        />
        <p className="mt-1 text-xs text-[#6C757D]">
          Upload your CV/Resume or any other relevant file. Max file size 50 MB
        </p>
        {errors.cvFile && <p className="mt-1 text-xs text-red-500">{errors.cvFile}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 cursor-pointer rounded bg-[#4A6CF7] px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B5DE7]"
      >
        Send Application
      </button>

      {submitted && (
        <p className="mt-4 text-sm text-green-600">
          Your application has been submitted successfully!
        </p>
      )}
    </form>
  )
}
