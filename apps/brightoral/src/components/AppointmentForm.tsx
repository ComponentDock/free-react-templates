import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="appointment" className="bg-cream py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg md:p-12">
          <h2 className="mb-2 text-center text-2xl font-light uppercase tracking-wider text-ink">
            Online <span className="font-bold">Appointment</span> Request Form
          </h2>
          <p className="mb-8 text-center text-sm text-mist">
            Fill out the form below and we will get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs uppercase tracking-wider text-mist"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-xs uppercase tracking-wider text-mist"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="mb-1 block text-xs uppercase tracking-wider text-mist"
                >
                  Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="mb-1 block text-xs uppercase tracking-wider text-mist"
                >
                  Time
                </label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs uppercase tracking-wider text-mist"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none border border-gray-200 px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand py-3 text-sm font-light uppercase tracking-widest text-white transition-colors hover:bg-brand-dark"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
