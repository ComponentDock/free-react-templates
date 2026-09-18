import { cn } from '@free-react-templates/ui'
import { useState } from 'react'

interface AppointmentProps {
  className?: string
}

export function Appointment({ className }: AppointmentProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    appointmentDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className={cn('bg-ink py-16 px-4', className)} data-testid="appointment">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-white/80 leading-relaxed">
            Schedule your visit today and let our expert team take care of your dental health. Fill
            in the form and we&apos;ll confirm your appointment shortly.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 shadow-lg"
          aria-label="Appointment form"
        >
          {submitted ? (
            <div className="text-center py-8" data-testid="booking-confirmation">
              <p className="text-brand text-lg font-semibold mb-2">Booking Confirmed!</p>
              <p className="text-mist">We will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-ink mb-1">
                    Patient Name
                  </label>
                  <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    value={formData.patientName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-ink mb-1"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appointmentDate"
                      className="block text-sm font-medium text-ink mb-1"
                    >
                      Appointment Date
                    </label>
                    <input
                      id="appointmentDate"
                      name="appointmentDate"
                      type="date"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded transition-colors"
              >
                Confirm Booking
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
