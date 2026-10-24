import { FormEvent, useState } from 'react'
import { CalendarDays } from 'lucide-react'

export function Appointment() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="appointment" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl rounded-lg bg-brand p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold">Book an Appointment</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white focus:outline-none"
                aria-label="Patient Name"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white focus:outline-none"
                aria-label="Phone"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white focus:outline-none"
                aria-label="Email Address"
              />
              <input
                type="text"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="rounded border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white focus:outline-none"
                aria-label="Date of Birth"
              />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              <input
                type="text"
                placeholder="Appointment Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded border border-white/30 bg-white/10 py-2 pl-10 pr-4 text-white placeholder-white/60 focus:border-white focus:outline-none"
                aria-label="Appointment Date"
              />
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-white/60 focus:border-white focus:outline-none"
              aria-label="Message"
            />
            <button
              type="submit"
              className="w-full rounded bg-white py-3 font-bold text-brand transition-colors hover:bg-brand-50"
            >
              CONFIRM BOOKING
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
