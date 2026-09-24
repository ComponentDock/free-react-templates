import { useState } from 'react'
import { CalendarDays } from 'lucide-react'

const DOCTOR_OPTIONS = ['Dr. Sarah Mitchell', 'Dr. James Wilson', 'Dr. Emily Chen']

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export default function BookAppointment() {
  const [form, setForm] = useState({
    doctor: '',
    name: '',
    age: '',
    phone: '',
    email: '',
    date: '',
    time: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <div className="w-full lg:w-7/12 bg-white rounded-xl shadow-sm p-8 md:p-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] text-brand-heading mb-8">
              Book an
              <br />
              <span className="text-brand-primary">Appointment</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <select
                name="doctor"
                value={form.doctor}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                aria-label="Select doctor"
              >
                <option value="">Please select doctor to visit</option>
                {DOCTOR_OPTIONS.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-9">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                    aria-label="Your name"
                  />
                </div>
                <div className="col-span-12 md:col-span-3">
                  <input
                    type="text"
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="Your age"
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                    aria-label="Your age"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                  aria-label="Phone number"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                  aria-label="Email address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="Appointment Date"
                    className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                    aria-label="Appointment date"
                  />
                  <CalendarDays
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                <input
                  type="text"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  placeholder="Suitable time"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-brand-body focus:outline-none focus:border-brand-primary"
                  aria-label="Preferred time"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-light text-white py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Make an Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
