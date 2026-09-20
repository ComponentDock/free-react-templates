import { ChevronLeft, ChevronRight } from 'lucide-react'

const countdown = [
  { value: '12', label: 'Days' },
  { value: '08', label: 'Hours' },
  { value: '45', label: 'Minutes' },
  { value: '30', label: 'Seconds' },
]

export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat pt-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lineup-hero/1600/900')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Countdown */}
        <div className="mb-8 flex items-center gap-6">
          {countdown.map((item) => (
            <div key={item.label} className="flex items-baseline gap-1 text-white">
              <span className="text-4xl font-bold">{item.value}</span>
              <span className="text-sm uppercase tracking-wider opacity-80">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="mb-8 max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          We have the best events.
          <br />
          Get your ticket now!
        </h1>

        {/* CTA */}
        <a
          href="#"
          className="inline-block rounded-full bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)] px-10 py-4 text-lg font-bold text-white transition-opacity hover:opacity-90"
        >
          Order here
        </a>
      </div>

      {/* Nav arrows (decorative) */}
      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
