import { useState } from 'react'
import type { FormEvent } from 'react'

const scheduleOptions = [
  'Choose Your Schedule',
  '9 AM to 10 AM',
  '11 AM to 12 PM',
  '2 PM to 4 PM',
  '8 PM to 10 PM',
] as const

export function Appointment() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [schedule, setSchedule] = useState<string>(scheduleOptions[0])
  const [time, setTime] = useState<string>(scheduleOptions[0])
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/dentalyn-appointment/1600/900)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-white">Book An Appointment</h2>
          <div className="mx-auto h-1 w-12 bg-primary-400" />
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-sm bg-black/30 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-sm bg-black/30 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-sm bg-black/30 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <input
            type="text"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="rounded-sm bg-black/30 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <select
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            className="appearance-none rounded-sm bg-black/30 px-6 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            {scheduleOptions.map((opt) => (
              <option key={opt} value={opt} className="text-gray-900">
                {opt}
              </option>
            ))}
          </select>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="appearance-none rounded-sm bg-black/30 px-6 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            {scheduleOptions.map((opt) => (
              <option key={opt} value={opt} className="text-gray-900">
                {opt}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="col-span-full rounded-sm bg-black/30 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 sm:col-span-1"
          />
          <div className="col-span-full text-center">
            <button
              type="submit"
              className="rounded-md bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
