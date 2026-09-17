import { useState, type FormEvent, type ChangeEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    description: '',
    budget: '',
    targetDate: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="rounded-lg bg-card-surface p-8 shadow-lg sm:p-10">
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-label">
        How can we help?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-primary">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label
              htmlFor="organization"
              className="mb-1 block text-sm font-medium text-text-primary"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="Your organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-primary">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-text-primary">
            Project Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="w-full resize-none rounded border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="mb-1 block text-sm font-medium text-text-primary">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-text-primary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            >
              <option value="">Choose...</option>
              <option value="small">$1,000 - $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="large">$15,000 - $50,000</option>
              <option value="enterprise">$50,000+</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="targetDate"
              className="mb-1 block text-sm font-medium text-text-primary"
            >
              Target Launch
            </label>
            <input
              type="text"
              id="targetDate"
              name="targetDate"
              placeholder="Example: January 15th"
              value={formData.targetDate}
              onChange={handleChange}
              className="w-full rounded border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
