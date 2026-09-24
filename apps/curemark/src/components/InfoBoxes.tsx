import { useState } from 'react'
import { Clock, Heart, Calendar } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface InfoBoxesProps {
  className?: string
}

const schedule = [
  { days: 'Monday — Thursday', hours: '08:00 - 19:00' },
  { days: 'Friday', hours: '08:00 - 18:30' },
  { days: 'Saturday', hours: '09:30 - 17:00' },
  { days: 'Sunday', hours: '09:30 - 15:00' },
]

const departments = [
  'Cardiology',
  'Gastroenterology',
  'Medical Lab',
  'Dental Care',
  'Surgery',
  'Neurology',
]

const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis']

export function InfoBoxes({ className }: InfoBoxesProps) {
  const [department, setDepartment] = useState('')
  const [doctor, setDoctor] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={cn('py-16 bg-section-info', className)} aria-label="Information boxes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-brand-accent" size={28} aria-hidden="true" />
              <h2 className="text-xl font-bold text-body">Opening Hours</h2>
            </div>
            <ul className="space-y-3">
              {schedule.map((item) => (
                <li key={item.days} className="flex justify-between text-sm text-body">
                  <span>{item.days}</span>
                  <span className="font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-brand-accent" size={28} aria-hidden="true" />
              <h2 className="text-xl font-bold text-body">Emergency</h2>
            </div>
            <p className="text-sm text-body-light mb-6">
              Our emergency department is available 24/7 for all urgent medical situations.
            </p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Heart size={16} aria-hidden="true" />
              Call Emergency: +1 234 567 890
            </a>
          </div>

          {/* Make an Appointment */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-brand-accent" size={28} aria-hidden="true" />
              <h2 className="text-xl font-bold text-body">Make an Appointment</h2>
            </div>
            {submitted ? (
              <p className="text-brand-accent font-medium" role="status">
                Thank you! Your appointment request has been submitted.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-body mb-1">
                    Department
                  </label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-body focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="doctor" className="block text-sm font-medium text-body mb-1">
                    Doctor
                  </label>
                  <select
                    id="doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-body focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="patient-name"
                    className="block text-sm font-medium text-body mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-body focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="patient-phone"
                    className="block text-sm font-medium text-body mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="patient-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-body focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full gradient-bg text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Make an Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
