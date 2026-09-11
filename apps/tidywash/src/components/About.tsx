import { useState, type FormEvent } from 'react'
import { Calendar, User, Phone as PhoneIcon, Clock, ChevronDown } from 'lucide-react'

const services = [
  'Residential',
  'Commercial',
  'Construction',
  'Windows',
  'Carpet',
  'Furniture',
  'Other',
] as const

export function About() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="about" aria-label="About" className="py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-400">
            About Company
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Most Awarded Cleaning Company Since 2000
          </h2>
          <p className="mt-6 leading-relaxed text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden flows by their place
            and supplies it with the necessary regelialia.
          </p>
          <p className="mt-4 leading-relaxed text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden flows by their place
            and supplies it with the necessary regelialia.
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="mb-4 text-lg font-bold text-ink">Book A Service</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="about-first" className="sr-only">
                  First Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="about-first"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className="w-full rounded border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="about-last" className="sr-only">
                  Last Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="about-last"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className="w-full rounded border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="about-phone" className="sr-only">
                Phone
              </label>
              <div className="relative">
                <PhoneIcon
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="about-phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full rounded border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="about-date" className="sr-only">
                  Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="about-date"
                    type="text"
                    placeholder="Date"
                    value={formData.date}
                    onChange={(e) => handleChange('date', e.target.value)}
                    className="w-full rounded border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="about-time" className="sr-only">
                  Time
                </label>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="about-time"
                    type="text"
                    placeholder="Time"
                    value={formData.time}
                    onChange={(e) => handleChange('time', e.target.value)}
                    className="w-full rounded border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <label htmlFor="about-service" className="sr-only">
                Service
              </label>
              <select
                id="about-service"
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className="w-full appearance-none rounded border border-gray-200 bg-white py-2.5 pl-3 pr-10 text-sm focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
              >
                <option value="">Select a Service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary-400 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
