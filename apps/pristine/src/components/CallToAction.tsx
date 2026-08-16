import { useState } from 'react'
import { Headphones } from 'lucide-react'

const serviceOptions = [
  { value: 'commercial', label: 'Commercial Cleaning' },
  { value: 'residential', label: 'Residential Cleaning' },
  { value: 'carpet', label: 'Carpet & Floor Cleaning' },
] as const

/** Yellow CTA band: headphones icon + "Get Free Phone Call" heading, a
 *  white pill phone input, a white pill services select and an outline
 *  navy "Send Request" button. */
export function CallToAction() {
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!phone.trim()) {
      setError('Please enter your phone number')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="cta" className="bg-accent">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 lg:flex-row lg:px-8">
        <div className="flex items-center gap-4 lg:w-2/5">
          <Headphones className="h-10 w-10 shrink-0 text-navy" aria-hidden="true" />
          <div>
            <h2 className="text-2xl font-medium text-cta-heading lg:text-3xl">
              Get Free Phone Call
            </h2>
            <p className="mt-1 text-sm text-cta-text">
              We could vary snack and coffee breaks, change desk.
            </p>
          </div>
        </div>
        {submitted ? (
          <p className="rounded-full bg-white px-6 py-3 font-medium text-brand" role="status">
            Thanks! We will call you back shortly.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-stretch gap-4 lg:w-3/5 lg:flex-row lg:items-center"
          >
            <label className="flex-1">
              <span className="sr-only">Your phone number</span>
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Your phone no."
                className="h-[50px] w-full rounded-full border-0 bg-white px-6 text-brand placeholder-navy focus:ring-2 focus:ring-navy focus:outline-none"
              />
            </label>
            <label className="flex-1">
              <span className="sr-only">Select a service</span>
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-[50px] w-full rounded-full border-0 bg-white px-6 text-navy focus:ring-2 focus:ring-navy focus:outline-none"
              >
                <option value="" disabled>
                  Services
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="btn-outline-navy shrink-0">
              Send Request
            </button>
            {error && (
              <p className="text-sm font-medium text-cta-text" role="alert">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
