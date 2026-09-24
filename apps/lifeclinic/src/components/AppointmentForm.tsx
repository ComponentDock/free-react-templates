import { useState, type FormEvent } from 'react'
import { Clock, Phone, Mail, MapPin } from 'lucide-react'
import {
  appointmentTitle,
  specialityOptions,
  doctorOptions,
  specialityLabel,
  doctorLabel,
  appointmentSubmitLabel,
  appointmentConfirmation,
  appointmentPhone,
  appointmentEmail,
  appointmentAddress,
  appointmentHours,
} from '../data'

export function AppointmentForm() {
  const [speciality, setSpeciality] = useState('')
  const [doctor, setDoctor] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="bg-section-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="overflow-hidden rounded-lg shadow-lg lg:flex">
          {/* Left: Form */}
          <div className="bg-navy p-8 lg:w-1/2 lg:p-12">
            <h2 className="mb-8 text-3xl font-bold text-white">{appointmentTitle}</h2>
            {submitted ? (
              <p role="status" className="text-lg text-white">
                {appointmentConfirmation}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="speciality" className="mb-2 block text-sm text-white/80">
                    {specialityLabel}
                  </label>
                  <select
                    id="speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-brand focus:outline-none"
                  >
                    {specialityOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="text-heading">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="doctor" className="mb-2 block text-sm text-white/80">
                    {doctorLabel}
                  </label>
                  <select
                    id="doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-brand focus:outline-none"
                  >
                    {doctorOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="text-heading">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded bg-brand py-3 text-sm font-bold text-white transition-colors hover:bg-brand-hover"
                >
                  {appointmentSubmitLabel}
                </button>
              </form>
            )}
          </div>

          {/* Right: Info */}
          <div className="bg-white p-8 lg:w-1/2 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-bold text-heading">Opening Hours</h3>
                  <p className="text-sm text-muted">{appointmentHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-bold text-heading">Phone</h3>
                  <p className="text-sm text-muted">{appointmentPhone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-bold text-heading">Email</h3>
                  <p className="text-sm text-muted">{appointmentEmail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-bold text-heading">Address</h3>
                  <p className="text-sm text-muted">{appointmentAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
