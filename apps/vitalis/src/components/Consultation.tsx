import { useState, type FormEvent } from 'react'
import { Calendar, Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const services = [
  'Body procedures',
  'Facial Procedures',
  'Breast procedures',
  'Skin care & Beauty',
] as const

export function Consultation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="about"
      aria-label="Consultation"
      className="bg-paper py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Welcome to Vitalis
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Consultation</h2>
          <p className="mt-4 text-lg font-semibold text-ink dark:text-white">
            Find Best Doctors With <span className="text-brand">VITALIS</span>
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            30 Years of experience in Cosmetic Surgery. Our specialists help you look and feel your
            best with personalized treatment plans, modern equipment, and certified care.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Play className="h-6 w-6 translate-x-0.5" aria-hidden="true" />
            </button>
            <p className="text-sm text-mist dark:text-gray-400">
              Watch how we work —
              <br />a tour of our clinic
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-sm transition-colors dark:bg-gray-900">
          {submitted ? (
            <div role="status" className="py-10 text-center">
              <p className="text-2xl font-bold text-brand">Thank you!</p>
              <p className="mt-3 text-sm text-mist dark:text-gray-400">
                Your appointment request has been received. We will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Appointment form">
              <h3 className="text-xl font-bold text-ink dark:text-white">Book an Appointment</h3>
              <div>
                <label
                  htmlFor="consult-name"
                  className="mb-1 block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="consult-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-phone"
                  className="mb-1 block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  id="consult-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-email"
                  className="mb-1 block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="consult-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="consult-service"
                  className="mb-1 block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Service
                </label>
                <div className="relative">
                  <select
                    id="consult-service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded border border-gray-300 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <Calendar
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full rounded bg-brand py-3.5 text-sm font-semibold uppercase tracking-[0.2em] hover:bg-brand-dark"
              >
                Book appointment
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
