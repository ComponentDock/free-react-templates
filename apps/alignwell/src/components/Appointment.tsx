import { useState, type FormEvent } from 'react'
import { Calendar, Clock, ChevronDown, Phone } from 'lucide-react'

const SERVICES = [
  'Spinal Manipulation',
  'Electrotherapy',
  'Manual Lymphatic',
  'Medical Acupuncture',
  'Therapeutic Exercise',
  'Joint Mobilization',
] as const

const DOCTORS = [
  'Dr. Lloyd Wilson',
  'Dr. Rachel Parker',
  'Dr. Ian Smith',
  'Dr. Alicia Henderson',
] as const

export function Appointment() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (name.trim() && phone.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="relative bg-brand py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-900">
          <div className="grid md:grid-cols-5">
            {/* Form */}
            <div className="p-8 md:col-span-3 md:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Booking an Appointment
              </span>
              <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
                Free Consultation
              </h2>

              {submitted ? (
                <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 text-center dark:border-green-800 dark:bg-green-900/20">
                  <p className="text-lg font-semibold text-green-700 dark:text-green-400">
                    Thank you! Your appointment request has been received.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="appt-name" className="sr-only">
                        Your Name
                      </label>
                      <input
                        id="appt-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="appt-phone" className="sr-only">
                        Phone number
                      </label>
                      <input
                        id="appt-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="appt-service" className="sr-only">
                        Select Service
                      </label>
                      <select
                        id="appt-service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Select Service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                    </div>
                    <div className="relative">
                      <label htmlFor="appt-doctor" className="sr-only">
                        Select Doctor
                      </label>
                      <select
                        id="appt-doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Select Doctor</option>
                        {DOCTORS.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                    </div>
                    <div className="relative">
                      <label htmlFor="appt-date" className="sr-only">
                        Date
                      </label>
                      <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                      <input
                        id="appt-date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="appt-time" className="sr-only">
                        Time
                      </label>
                      <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" />
                      <input
                        id="appt-time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="rounded-r-2xl bg-gray-50 p-8 md:col-span-2 md:p-10 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-ink dark:text-white">Business Hours</h3>
              <div className="mt-4 space-y-3 text-sm text-mist">
                <div>
                  <p className="font-semibold text-ink dark:text-white">Opening Days:</p>
                  <p className="ml-3">Monday – Friday: 9am to 8pm</p>
                  <p className="ml-3">Saturday: 9am to 5pm</p>
                </div>
                <div>
                  <p className="font-semibold text-ink dark:text-white">Vacations:</p>
                  <p className="ml-3">All Sunday Days</p>
                  <p className="ml-3">All Official Holidays</p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                <h4 className="text-lg font-bold text-ink dark:text-white">For Emergency Cases</h4>
                <a
                  href="tel:+11234567890"
                  className="mt-2 flex items-center gap-2 text-lg font-bold text-brand"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  (+01) 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
