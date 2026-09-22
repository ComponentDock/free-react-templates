import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface AppointmentProps {
  className?: string
}

export function Appointment({ className }: AppointmentProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    yogaClass: '',
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="appointment" className={cn('bg-dark-bg py-20', className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Book a Class
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-white">Make An Appointment</h2>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
            />
            <select
              name="yogaClass"
              value={formData.yogaClass}
              onChange={handleChange}
              className="rounded bg-white/10 px-4 py-3 text-sm text-white/50 outline-none focus:ring-2 focus:ring-brand"
            >
              <option value="" disabled>
                Select a Class
              </option>
              <option value="hatha">Hatha Yoga</option>
              <option value="vinyasa">Vinyasa Yoga</option>
              <option value="ashtanga">Ashtanga Yoga</option>
              <option value="kundalini">Kundalini Yoga</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
          />
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
