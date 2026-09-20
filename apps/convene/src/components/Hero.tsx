import { CalendarDays } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/convene-hero/1600/900"
          alt="Conference venue"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
            <CalendarDays className="h-4 w-4" />5 to 9 May 2025, Mardavall Hotel, New York
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Change Your Mind
            <br />
            To Become Success
          </h1>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-brand to-brand-pink px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </section>
  )
}
