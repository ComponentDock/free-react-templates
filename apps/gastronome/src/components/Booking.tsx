import { useState } from 'react'

export function Booking() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [people, setPeople] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="reservation" className="pattern-bg py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="font-accent text-lg text-brand">Make a Reservation</p>
          <h2 className="mt-4 text-4xl font-bold text-white">Book a Table</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-placeholder"
                placeholder="Date"
                aria-label="Date"
              />
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark"
                aria-label="Time"
              >
                <option value="">Select Time</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark"
              aria-label="Number of people"
            >
              <option value="">Number of People</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6+ People</option>
            </select>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-placeholder"
              aria-label="Your Name"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-placeholder"
                aria-label="Phone Number"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="rounded-[10px] border border-border-light bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-placeholder"
                aria-label="Email Address"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-[10px] bg-surface-darker py-3 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Book Table
            </button>
          </form>
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <img
            src="https://picsum.photos/seed/gastro-booking/600/500"
            alt="Restaurant booking"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
