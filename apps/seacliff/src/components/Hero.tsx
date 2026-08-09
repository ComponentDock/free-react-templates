import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const words = ['Unforgettable Moments', 'Pure Elegance', 'True Comfort']

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image + navy gradient overlay (from the demo stylesheet). */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://picsum.photos/seed/seacliff-1/1920/1080"
          alt="Luxury oceanfront resort"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />
      </div>

      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center lg:px-8">
        {/* Gold accent line */}
        <div className="mb-8 h-px w-16 bg-accent-400" />

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
          Experience
          <br />
          <span className="text-accent-400">{words[wordIndex]}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl">
          Nestled along the pristine shores of Miami Beach, Seacliff offers an unparalleled blend of
          elegance, comfort, and world-class hospitality.
        </p>

        {/* Floating booking widget */}
        <div
          id="booking"
          className="mx-auto mt-12 w-full max-w-4xl rounded-2xl bg-primary-900/60 p-4 backdrop-blur-md sm:p-6"
        >
          <form
            className="flex flex-col items-end gap-4 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="w-full flex-1">
              <label
                htmlFor="checkin"
                className="mb-1.5 block text-left text-xs font-medium uppercase tracking-wider text-accent-400"
              >
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
              />
            </div>
            <div className="w-full flex-1">
              <label
                htmlFor="checkout"
                className="mb-1.5 block text-left text-xs font-medium uppercase tracking-wider text-accent-400"
              >
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400"
              />
            </div>
            <div className="w-full flex-1">
              <label
                htmlFor="guests"
                className="mb-1.5 block text-left text-xs font-medium uppercase tracking-wider text-accent-400"
              >
                Guests
              </label>
              <select
                id="guests"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 [&>option]:bg-white [&>option]:text-gray-900"
              >
                {['1', '2', '3', '4', '5+'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-accent-500 px-8 shadow-lg shadow-accent-500/25 hover:bg-accent-600"
            >
              Check Availability
            </Button>
          </form>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#rooms"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
      >
        Scroll
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
