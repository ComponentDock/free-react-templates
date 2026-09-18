import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const categories = [
  'Family Law',
  'Labor Law',
  'Business Litigation',
  'Employment Law',
  'Criminal Law',
]

export function ConsultationForm() {
  const [category, setCategory] = useState('')

  return (
    <section id="about" className="bg-section-bg py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
          <h3 className="shrink-0 text-lg font-semibold text-ink lg:text-right">
            My Free Consultation
          </h3>
          <form
            className="flex w-full flex-col gap-4 sm:flex-row sm:items-end"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1">
              <label htmlFor="consult-name" className="mb-1 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="consult-name"
                type="text"
                placeholder="Name"
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="consult-email" className="mb-1 block text-sm font-medium text-ink">
                Email Address
              </label>
              <input
                id="consult-email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="consult-category" className="mb-1 block text-sm font-medium text-ink">
                Categories (optional)
              </label>
              <select
                id="consult-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-4 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              className="rounded bg-brand px-8 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-brand-dark"
            >
              Contact
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
