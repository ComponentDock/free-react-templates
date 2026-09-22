import { type FormEvent, useState } from 'react'

const specialties = ['Rhinoplasty', 'Facelift', 'Breast Augmentation', 'Liposuction', 'Botox']
const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis']

const milestones = [
  { value: '5,000+', label: 'Satisfied Patients' },
  { value: '352', label: 'Face Liftings' },
  { value: '718', label: 'Injectibles' },
]

export function Intro() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Content + Stats */}
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-coral-400">
              About Us
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Welcome to our Clinic</h2>
            <p className="mb-8 leading-relaxed text-gray-500">
              We are a leading plastic surgery clinic dedicated to helping you achieve your
              aesthetic goals. With state-of-the-art facilities and board-certified surgeons, we
              provide personalized care tailored to each patient&apos;s unique needs.
            </p>

            {/* Milestones */}
            <div className="grid grid-cols-3 gap-6">
              {milestones.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-2xl font-bold text-coral-400 sm:text-3xl">{m.value}</div>
                  <div className="mt-1 text-xs text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Appointment Form */}
          <div id="appointment" className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-gray-900">Make an Appointment</h3>
            {submitted ? (
              <p className="text-center text-coral-500">
                Thank you! We&apos;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-coral-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-coral-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  required
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:border-coral-400 focus:outline-none"
                />
                <select
                  required
                  defaultValue=""
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
                >
                  <option value="" disabled>
                    Speciality
                  </option>
                  {specialties.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <select
                  required
                  defaultValue=""
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
                >
                  <option value="" disabled>
                    Doctor
                  </option>
                  {doctors.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
                <input
                  type="date"
                  required
                  className="rounded border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-coral-400 focus:outline-none"
                />
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-coral-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-500"
                  >
                    Make an Appointment
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
