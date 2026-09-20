import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="register" className="bg-brand-secondary py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Courses For Free</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
                aria-label="Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
                aria-label="Email"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
                aria-label="Phone"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-primary"
                aria-label="Subject"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 rounded-[3px] text-sm font-bold uppercase tracking-wide hover:bg-brand-primary/90 transition-colors"
            >
              Register Now
            </button>
          </form>

          {/* Countdown area */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Next Cohort Starts In</h3>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { value: '04', label: 'Days' },
                { value: '12', label: 'Hours' },
                { value: '30', label: 'Minutes' },
                { value: '15', label: 'Seconds' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/20 backdrop-blur-sm rounded p-4 text-center min-w-[70px]"
                >
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-xs text-white/70 uppercase mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
