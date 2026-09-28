import { useState, type FormEvent } from 'react'

const openingHours = [
  { day: 'Sunday', hours: '8:00 am – 11:00 pm' },
  { day: 'Monday', hours: '8:00 am – 11:00 pm' },
  { day: 'Tuesday', hours: '8:00 am – 11:00 pm' },
  { day: 'Wednesday', hours: '8:00 am – 11:00 pm' },
  { day: 'Thursday', hours: '8:00 am – 11:00 pm' },
  { day: 'Friday', hours: 'Closed' },
  { day: 'Saturday', hours: 'Closed' },
]

const guestOptions = ['1 Person', '2 People', '3 People', '4 People', '5 People', '6 People']

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="relative overflow-hidden py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/polenta-reserve/1920/1080)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Reservation form */}
          <div className="lg:col-span-7 lg:col-start-1">
            <div className="text-center">
              <h4 className="font-sans text-base font-normal text-brand">Reservation</h4>
              <h2 className="mt-2 font-display text-4xl text-white">Book Your Table</h2>
              <div className="mx-auto mt-4 h-0.5 w-4 bg-brand" />
            </div>

            {submitted ? (
              <div className="mt-8 rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
                <p className="text-lg text-white">
                  Thank you! Your reservation request has been received.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm text-white">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="mb-1 block text-sm text-white">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white focus:border-brand focus:outline-none"
                  >
                    {guestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="mb-1 block text-sm text-white">
                    Date
                  </label>
                  <input
                    id="date"
                    type="text"
                    placeholder="MM/DD/YYYY"
                    required
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="mb-1 block text-sm text-white">
                    Time
                  </label>
                  <input
                    id="time"
                    type="text"
                    placeholder="HH:MM"
                    required
                    className="w-full rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2 text-center">
                  <button
                    type="submit"
                    className="mt-4 rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-opacity hover:opacity-80"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Opening times */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-center font-display text-3xl text-white">Opening Time</h2>
            <div className="mx-auto mt-4 h-0.5 w-4 bg-brand" />
            <ul className="mt-8 space-y-4">
              {openingHours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="font-heading text-sm font-bold text-white">{item.day}</span>
                  <span
                    className={`text-sm ${item.hours === 'Closed' ? 'text-white/50' : 'text-brand'}`}
                  >
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
