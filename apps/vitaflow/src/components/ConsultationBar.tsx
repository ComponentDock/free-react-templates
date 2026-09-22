import { useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

export function ConsultationBar() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    service: '',
    date: '',
    time: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="flex flex-col md:flex-row" id="contact">
      {/* Healthcare Services */}
      <div className="flex flex-1 items-stretch bg-primary-400 px-8 py-16 text-center text-white">
        <div className="mx-auto max-w-xs">
          <h3 className="mb-4 text-lg font-medium text-white">Healthcare Services</h3>
          <p className="mb-6 text-sm text-white/80">
            Comprehensive health coaching services designed to transform your lifestyle and
            well-being.
          </p>
          <a
            href="#services"
            className="text-xs font-medium uppercase tracking-widest text-white no-underline hover:text-white/80"
          >
            See Services
          </a>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="flex flex-[2] items-stretch bg-darkblue px-8 py-16 text-white">
        <div className="mx-auto w-full max-w-2xl">
          <h3 className="mb-6 text-center text-lg font-medium text-white">Free Consultation</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="rounded border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="rounded border border-white/20 bg-transparent px-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="rounded border border-white/20 bg-transparent px-4 py-2 text-sm text-white/60 focus:border-white/40 focus:outline-none"
              >
                <option value="">Services</option>
                <option value="exercise">Exercise Program</option>
                <option value="nutrition">Nutrition Plans</option>
                <option value="diet">Diet Program</option>
              </select>
              <div className="relative">
                <Calendar
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="text"
                  name="date"
                  placeholder="Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded border border-white/20 bg-transparent py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
              <div className="relative">
                <Clock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
                />
                <input
                  type="text"
                  name="time"
                  placeholder="Time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full rounded border border-white/20 bg-transparent py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="rounded border border-white bg-white px-4 py-2 text-sm font-medium text-darkblue hover:bg-white/90"
              >
                Appointment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Find A Health Expert */}
      <div className="flex flex-1 items-stretch bg-primary-400 px-8 py-16 text-center text-white">
        <div className="mx-auto max-w-xs">
          <h3 className="mb-4 text-lg font-medium text-white">Find A Health Expert</h3>
          <p className="mb-6 text-sm text-white/80">
            Connect with our certified health coaches who will create a plan tailored to your needs.
          </p>
          <a
            href="#coach"
            className="text-xs font-medium uppercase tracking-widest text-white no-underline hover:text-white/80"
          >
            Meet our health coach
          </a>
        </div>
      </div>
    </section>
  )
}
