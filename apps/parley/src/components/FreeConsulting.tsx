import { useState } from 'react'
import { BarChart3, Briefcase, PieChart, TrendingUp } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { brand, consultServices, guidanceOptions, type ServiceIcon } from '../data'

const iconMap: Record<ServiceIcon, typeof Briefcase> = {
  briefcase: Briefcase,
  chart: BarChart3,
  pie: PieChart,
  trending: TrendingUp,
}

const successMessage = 'Thank you! Our team will get back to you shortly.'

/** Free Consulting card (source: .consult-wrap white card overlapping the
 *  hero with a negative top margin ≥992px and a heavy soft shadow). Left:
 *  the quote form (First Name / Last Name / Select Guidance / Phone /
 *  Message + pink "Request A Quote" submit, success replaces the form).
 *  Right: "Parley — A Consulting Agency" brand block + 2×2 services grid. */
export function FreeConsulting() {
  const [submitted, setSubmitted] = useState(false)

  const fields = [
    { id: 'first-name', label: 'First Name', type: 'text' },
    { id: 'last-name', label: 'Last Name', type: 'text' },
    { id: 'phone', label: 'Phone', type: 'text' },
  ] as const

  return (
    <section id="consult" className="bg-soft pb-20 pt-4 lg:pt-0" aria-label="Free Consulting">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid overflow-hidden bg-white shadow-[0_-15px_39px_-13px_rgba(0,0,0,0.35)] lg:-mt-24 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-ink">Free Consulting</h2>
            {submitted ? (
              <p className="mt-8 rounded-lg bg-brand/10 p-4 text-ink">{successMessage}</p>
            ) : (
              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                {fields.map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="mb-1 block text-sm font-medium text-ink">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="guidance" className="mb-1 block text-sm font-medium text-ink">
                    Select Guidance
                  </label>
                  <select
                    id="guidance"
                    name="guidance"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  >
                    {guidanceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    className="rounded-full bg-accent px-8 py-3 font-semibold text-white hover:bg-accent-hover"
                  >
                    Request A Quote
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="border-t border-gray-100 bg-white p-8 lg:border-l lg:border-t-0 lg:p-12">
            <p className="text-3xl font-black text-ink">{brand.name}</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-muted">A Consulting Agency</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {consultServices.map((service) => {
                const Icon = iconMap[service.icon]
                return (
                  <div key={service.title}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className={cn('mt-4 text-lg font-semibold text-ink')}>{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
