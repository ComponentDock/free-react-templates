import { useState } from 'react'

export function ReservationSection() {
  const [partySize, setPartySize] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="reservation" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
          Reserve A Table
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Hours Panel */}
          <div className="bg-heading p-8 text-white">
            <h3 className="mb-6 text-xl font-bold">Time Open</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Monday — Thursday</span>
                <span>9:00 AM — 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday — Saturday</span>
                <span>9:00 AM — 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM — 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:col-span-2"
            aria-label="Reservation form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="partySize"
                  className="mb-1 block text-sm font-medium text-text-dark"
                >
                  Party Size
                </label>
                <select
                  id="partySize"
                  name="partySize"
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1 block text-sm font-medium text-text-dark">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor="time" className="mb-1 block text-sm font-medium text-text-dark">
                  Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-dark">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-text-dark">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone number"
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-dark">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full border border-border-gray px-4 py-3 text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full border-2 border-brand bg-brand py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-hover"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
