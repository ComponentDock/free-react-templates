import { useState } from 'react'

const PEOPLE_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8']

export function FormPanel() {
  const [formData, setFormData] = useState({
    people: '1',
    name: '',
    mail: '',
    phone: '',
    comment: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="flex w-full flex-col bg-navy p-8 md:w-1/2">
      <h1 className="mb-8 text-center font-heading text-3xl font-bold text-coral md:text-left">
        Set The Event
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Price row */}
        <div className="flex items-center justify-between border-b border-white/30 pb-2">
          <span className="font-heading text-sm font-semibold text-coral">Price</span>
          <span className="text-sm text-white">$270</span>
        </div>

        {/* People row */}
        <div className="flex items-center justify-between border-b border-white/30 pb-2">
          <span className="font-heading text-sm font-semibold text-coral">People</span>
          <select
            name="people"
            value={formData.people}
            onChange={handleChange}
            className="bg-transparent text-sm text-white focus:outline-none"
          >
            {PEOPLE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-navy text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Name input */}
        <div className="border-b border-white/30 pb-1">
          <label
            htmlFor="name"
            className="mb-1 block font-heading text-sm font-semibold text-coral"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
            placeholder=""
          />
        </div>

        {/* Mail input */}
        <div className="border-b border-white/30 pb-1">
          <label
            htmlFor="mail"
            className="mb-1 block font-heading text-sm font-semibold text-coral"
          >
            Mail
          </label>
          <input
            id="mail"
            name="mail"
            type="email"
            value={formData.mail}
            onChange={handleChange}
            className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
            placeholder=""
          />
        </div>

        {/* Phone input */}
        <div className="border-b border-white/30 pb-1">
          <label
            htmlFor="phone"
            className="mb-1 block font-heading text-sm font-semibold text-coral"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
            placeholder=""
          />
        </div>

        {/* Comment textarea */}
        <div className="border-b border-white/30 pb-1">
          <label
            htmlFor="comment"
            className="mb-1 block font-heading text-sm font-semibold text-coral"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={2}
            className="w-full resize-none bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
            placeholder=""
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="mt-2 rounded bg-coral px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral/80"
        >
          Send your booking
        </button>
      </form>
    </div>
  )
}
