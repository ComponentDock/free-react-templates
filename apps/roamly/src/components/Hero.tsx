import { useState, type FormEvent } from 'react'
import { ArrowRight, Calendar, MapPin, Play, Users } from 'lucide-react'
import { Button, ButtonLink, cn } from '@free-react-templates/ui'

const stats = [
  { value: '50+', label: 'Destinations' },
  { value: '200+', label: 'Tour Packages' },
  { value: '15k+', label: 'Happy Travelers' },
  { value: '98%', label: 'Satisfaction Rate' },
] as const

const travelerOptions = ['1 Traveler', '2 Travelers', '3 Travelers', '4+ Travelers'] as const

export function Hero() {
  const [destination, setDestination] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (value: string) => {
    setDestination(value)
    if (error) {
      setError('')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!destination.trim()) {
      setError('Please enter a destination')
      setSuccess(false)
      return
    }
    setSuccess(true)
  }

  const inputClasses = (invalid: boolean) =>
    cn(
      'w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white',
      invalid && 'border-red-400',
    )

  return (
    <section id="home" className="relative min-h-screen pb-20 lg:pb-32">
      <img
        src="https://picsum.photos/seed/roamly-hero/1920/1080"
        alt="Alpine lake with a wooden rowboat at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-950/60" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 lg:px-8">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-primary-300" aria-hidden="true" />
            Top-Rated Travel Agency 2025
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover Your Next{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-100">
            Explore breathtaking destinations around the world with our expertly curated tours. From
            ancient wonders to tropical paradises, your dream vacation awaits.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#tours"
              className="h-auto rounded-lg bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl"
            >
              Explore Tours
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#about"
              className="h-auto rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/20"
            >
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              Watch Our Story
            </ButtonLink>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Search widget */}
        <div className="relative z-10 mt-16 rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            <div>
              <label
                htmlFor="roamly-destination"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Destination
              </label>
              <div className="relative mt-1.5">
                <MapPin
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="roamly-destination"
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(event) => handleChange(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'roamly-destination-error' : undefined}
                  className={inputClasses(Boolean(error))}
                />
              </div>
              {error && (
                <p id="roamly-destination-error" className="mt-1 text-xs font-medium text-red-600">
                  {error}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="roamly-checkin"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Check In
              </label>
              <div className="relative mt-1.5">
                <Calendar
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <input id="roamly-checkin" type="date" className={inputClasses(false)} />
              </div>
            </div>
            <div>
              <label
                htmlFor="roamly-checkout"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Check Out
              </label>
              <div className="relative mt-1.5">
                <Calendar
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <input id="roamly-checkout" type="date" className={inputClasses(false)} />
              </div>
            </div>
            <div>
              <label
                htmlFor="roamly-travelers"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Travelers
              </label>
              <div className="relative mt-1.5">
                <Users
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  aria-hidden="true"
                />
                <select
                  id="roamly-travelers"
                  defaultValue={travelerOptions[0]}
                  className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                >
                  {travelerOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-end sm:col-span-2 lg:col-span-1">
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-lg bg-primary-600 py-3 font-medium text-white hover:bg-primary-700"
              >
                Search Tours
              </Button>
            </div>
          </form>
          {success && (
            <p
              role="status"
              className="mt-4 rounded-lg bg-primary-50 px-4 py-3 text-sm font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-200"
            >
              Thanks! We will find the perfect tours for you.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
