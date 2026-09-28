import { useState, type FormEvent, type ChangeEvent } from 'react'
import { FormField } from './FormField'
import { SideImage } from './SideImage'

export function RegistrationCard() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="mb-8 w-full max-w-[900px] overflow-hidden rounded-lg bg-white shadow-lg max-md:mb-4">
      <div className="flex max-md:flex-col">
        {/* Form side */}
        <div className="flex-1 px-10 py-10 max-md:px-6 max-md:py-8">
          <h2 className="mb-2 text-center text-2xl font-bold text-text-primary">Create Account</h2>
          <p className="mb-8 text-center text-sm text-text-secondary">
            Fill in the details below to create your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4 max-md:flex-col">
              <FormField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
              <FormField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
              />
            </div>
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <FormField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Register
            </button>
          </form>
        </div>

        {/* Image side */}
        <SideImage />
      </div>
    </div>
  )
}
