import { useState } from 'react'

const departments = ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Oral Surgery']

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full border-b border-white/30 bg-transparent py-2 text-sm text-white placeholder-white/50 focus:border-primary-300 focus:outline-none'

  return (
    <section id="contact" className="bg-gray-900 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Book an Appointment</h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill out the form below and we will get back to you shortly.
          </p>
        </div>

        {submitted ? (
          <div
            className="mt-8 rounded-lg bg-primary-300/20 p-6 text-center text-white"
            role="status"
          >
            <p className="text-lg font-bold">
              Thank you! Your appointment request has been submitted.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" aria-label="Appointment form">
            <div>
              <label htmlFor="department" className="mb-1 block text-xs font-medium text-white/70">
                Department
              </label>
              <select id="department" name="department" className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select department
                </option>
                {departments.map((d) => (
                  <option key={d} value={d} className="text-gray-900">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-medium text-white/70">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-white/70">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="mb-1 block text-xs font-medium text-white/70">
                  Date
                </label>
                <input id="date" name="date" type="date" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="time" className="mb-1 block text-xs font-medium text-white/70">
                  Time
                </label>
                <input id="time" name="time" type="time" required className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-xs font-medium text-white/70">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="Your phone number"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded bg-primary-300 px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-400"
              >
                Make an Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
