import { Calendar } from 'lucide-react'
import { hero, bookingForm } from '../data'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative flex min-h-screen items-center">
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-4 lg:grid-cols-12 lg:px-8">
        {/* Left column */}
        <div className="lg:col-span-7">
          <p className="text-sm tracking-wider text-white/70 uppercase">{hero.subtitle}</p>
          <h1 className="mt-4 text-4xl leading-tight font-bold text-white uppercase md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/70">{hero.description}</p>
          <a
            href="#cars"
            className="mt-8 inline-block rounded-[3px] bg-brand px-10 py-3 text-sm font-medium text-white uppercase transition-colors hover:bg-brand-dark"
          >
            {hero.ctaLabel}
          </a>
        </div>

        {/* Right column - Booking form */}
        <div className="rounded bg-white p-8 shadow-lg lg:col-span-5">
          <h2 className="mb-6 text-xl font-semibold text-text">{bookingForm.heading}</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="car-select" className="sr-only">
                Select car
              </label>
              <select
                id="car-select"
                className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
              >
                <option value="">Select your car</option>
                {bookingForm.carOptions.map((car) => (
                  <option key={car} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pickup-location" className="sr-only">
                  Pickup location
                </label>
                <select
                  id="pickup-location"
                  className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
                >
                  <option value="">Pickup location</option>
                  {bookingForm.pickupLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <label htmlFor="pickup-date" className="sr-only">
                  Pickup date
                </label>
                <input
                  id="pickup-date"
                  type="date"
                  className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
                />
                <Calendar
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="dropoff-location" className="sr-only">
                  Dropoff location
                </label>
                <select
                  id="dropoff-location"
                  className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
                >
                  <option value="">Dropoff location</option>
                  {bookingForm.dropoffLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <label htmlFor="dropoff-date" className="sr-only">
                  Dropoff date
                </label>
                <input
                  id="dropoff-date"
                  type="date"
                  className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
                />
                <Calendar
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="w-full rounded border border-gray-200 bg-bg-alt px-4 py-3 text-sm text-text-light"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[3px] bg-brand px-8 py-3 text-sm font-medium text-white uppercase transition-colors hover:bg-brand-dark"
            >
              {bookingForm.ctaLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
