import { useState } from 'react'

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2 className="mb-8 font-['Cormorant_Garamond',serif] text-[36px] font-semibold text-brand">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-dot" />
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full bg-bg-input px-5 py-3 text-sm tracking-wide text-text placeholder:text-text-muted"
          />
        </div>
        {/* Email field */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-dot" />
          <input
            type="email"
            name="email"
            placeholder="E-MAIL"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full bg-bg-input px-5 py-3 text-sm tracking-wide text-text placeholder:text-text-muted"
          />
        </div>
        {/* Password field */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-dot" />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-full bg-bg-input px-5 py-3 text-sm tracking-wide text-text placeholder:text-text-muted"
          />
        </div>
        {/* Terms checkbox */}
        <div className="mb-6 flex items-center gap-2 text-xs text-text-muted">
          <span className="text-brand">+</span>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="sr-only"
            />
            <span>I agree all statement in </span>
            <span className="font-medium text-link hover:underline">Terms &amp; Conditions</span>
          </label>
        </div>
        {/* Submit row */}
        <div className="flex items-center gap-5">
          <button
            type="submit"
            className="cursor-pointer rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
          >
            Sign Up
          </button>
          <span className="text-sm text-text-muted">
            Already Have account?{' '}
            <a href="#login" className="font-medium text-link hover:underline">
              Login
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}
