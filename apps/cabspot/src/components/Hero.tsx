import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

const locations = [
  'Airport',
  'Downtown',
  'Train Station',
  'Hotel District',
  'Business Park',
  'Shopping Mall',
]

export function Hero() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [dateTime, setDateTime] = useState('')

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/cabspot-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-5">
        {/* Left side */}
        <div className="flex flex-col justify-center md:col-span-3">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Need a ride? Just Call
          </h1>
          <p className="mb-2 text-3xl font-bold text-taxi">911 999 911</p>
          <p className="mb-8 max-w-md text-gray-300">
            Experience the best taxi service in town. We provide fast, reliable, and comfortable
            rides to get you to your destination on time, every time.
          </p>
          <div>
            <a
              href="#contact"
              className={cn(
                'inline-block bg-taxi px-8 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-taxi-dark',
              )}
            >
              Call for Taxi
            </a>
          </div>
        </div>

        {/* Right side - Booking Form */}
        <div className="rounded-sm bg-white p-6 shadow-xl md:col-span-2">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Book a Ride</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              aria-label="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            />
            <select
              aria-label="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            >
              <option value="">From</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              aria-label="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            >
              <option value="">To</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <input
              type="datetime-local"
              aria-label="Date and Time"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:border-taxi focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-taxi px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-taxi-dark"
            >
              Make Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
