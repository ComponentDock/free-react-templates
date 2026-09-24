import { useState, type FormEvent } from 'react'
import { ButtonLink } from '@free-react-templates/ui'

/** Three info boxes: Free Consultations, Emergency Care, Make an Appointment form. */
export function InfoBoxes() {
  const [department, setDepartment] = useState('')
  const [doctor, setDoctor] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="info" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Consultations */}
          <div className="overflow-hidden rounded-sm bg-white shadow-md">
            <img
              src="https://picsum.photos/seed/vitaheal-consult/600/300"
              alt="Free consultations"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-ink-900">Free Consultations</h3>
              <p className="mb-4 text-sm leading-6 text-mute-600">
                Expert medical guidance at no initial cost — our team is ready to assess your needs
                and recommend the right path to better health.
              </p>
              <ButtonLink
                href="#services"
                className="text-sm font-semibold text-teal-400 transition-colors hover:text-teal-600"
              >
                Read More
              </ButtonLink>
            </div>
          </div>

          {/* Emergency Care */}
          <div className="overflow-hidden rounded-sm bg-white shadow-md">
            <img
              src="https://picsum.photos/seed/vitaheal-emergency/600/300"
              alt="Emergency care"
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="mb-3 text-lg font-bold text-ink-900">Emergency Care</h3>
              <p className="mb-4 text-sm leading-6 text-mute-600">
                Round-the-clock emergency services with rapid response teams and state-of-the-art
                facilities to handle urgent medical situations.
              </p>
              <ButtonLink
                href="#services"
                className="text-sm font-semibold text-teal-400 transition-colors hover:text-teal-600"
              >
                Read More
              </ButtonLink>
            </div>
          </div>

          {/* Make an Appointment */}
          <div className="rounded-sm bg-white p-6 shadow-md">
            <h3 className="mb-4 text-lg font-bold text-ink-900">Make an Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-mute-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
                aria-label="Department"
              >
                <option value="">Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="dental">Dental Care</option>
              </select>
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-mute-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
                aria-label="Doctor"
              >
                <option value="">Doctor</option>
                <option value="dr-smith">Dr. Smith</option>
                <option value="dr-jones">Dr. Jones</option>
                <option value="dr-wilson">Dr. Wilson</option>
              </select>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink-700 placeholder-mute-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-sm border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink-700 placeholder-mute-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-sm bg-teal-400 px-4 py-2.5 text-sm font-semibold text-white uppercase transition-colors hover:bg-teal-500"
              >
                Make an Appointment
              </button>
              {submitted && (
                <p className="text-sm text-teal-600" role="status">
                  Appointment request submitted!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
