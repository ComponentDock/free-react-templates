import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    country: 'United States',
    gender: 'Male',
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <div className="mx-auto max-w-2xl bg-bg-card p-8 shadow-lg">
      <h2 className="mb-8 text-center font-['Playfair_Display',serif] text-3xl font-bold uppercase tracking-wider text-text-primary">
        Registration Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label
              htmlFor="username"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label
              htmlFor="password"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="repeatPassword"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Repeat Password:
            </label>
            <input
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex-1">
            <label
              htmlFor="country"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Country:
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="gender"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-text-label"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text-primary outline-none focus:ring-2 focus:ring-brand/30"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 pt-2">
          <label className="flex items-start gap-2 text-xs text-text-secondary">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="mt-0.5"
            />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </span>
          </label>
          <button
            type="submit"
            className="whitespace-nowrap rounded bg-brand px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  )
}
