import { Calendar } from 'lucide-react'

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[--color-year] to-[--color-day] py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 flex justify-center">
          <Calendar size={48} strokeWidth={1.5} />
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Calendar & Schedule Dashboard</h1>
        <p className="text-lg text-white/80">
          View your year, month, and day at a glance. Navigate through time with an elegant,
          interactive dashboard.
        </p>
      </div>
    </section>
  )
}
