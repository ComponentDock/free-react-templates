import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  areaCode: string
  phoneNumber: string
  subject: string
  existingCustomer: 'yes' | 'no'
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    areaCode: '',
    phoneNumber: '',
    subject: '',
    existingCustomer: 'yes',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="rounded-lg bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
      {/* Dark header */}
      <div className="rounded-t-lg bg-[#1E1E2E] px-10 py-6">
        <h1 className="text-center text-2xl font-bold uppercase text-white tracking-wide">
          Event Registration Form
        </h1>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit} className="px-10 py-10">
        {/* Name */}
        <div className="mb-5">
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Name
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="h-11 rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="h-11 rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Company */}
        <div className="mb-5">
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="h-11 w-full rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-11 w-full rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label htmlFor="areaCode" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Phone
          </label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              id="areaCode"
              type="text"
              placeholder="Area Code"
              value={formData.areaCode}
              onChange={(e) => setFormData({ ...formData, areaCode: e.target.value })}
              className="h-11 rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <input
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="h-11 rounded-md border-0 bg-gray-200 px-4 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-5">
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="h-11 w-full appearance-none rounded-md border-0 bg-gray-200 px-4 pr-10 text-sm text-gray-700 outline-none"
            >
              <option value="">Choose option</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Existing customer */}
        <div className="mb-6 mt-4">
          <p className="mb-2 text-sm font-semibold text-gray-800">Are you an existing customer?</p>
          <div className="flex gap-10">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="existingCustomer"
                value="yes"
                checked={formData.existingCustomer === 'yes'}
                onChange={() => setFormData({ ...formData, existingCustomer: 'yes' })}
                className="h-[18px] w-[18px] accent-[#22C55E]"
              />
              Yes
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="existingCustomer"
                value="no"
                checked={formData.existingCustomer === 'no'}
                onChange={() => setFormData({ ...formData, existingCustomer: 'no' })}
                className="h-[18px] w-[18px] accent-[#22C55E]"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="h-11 rounded-md bg-red-500 px-8 text-sm font-semibold uppercase text-white tracking-wider transition-colors hover:bg-red-600"
        >
          Register
        </button>
      </form>
    </div>
  )
}
