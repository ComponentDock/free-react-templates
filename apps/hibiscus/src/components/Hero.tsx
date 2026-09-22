import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Hero({ className }: { className?: string }) {
  return (
    <section
      id="booking"
      className={cn('relative flex min-h-[80vh] items-center justify-center', className)}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/hibiscus-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 w-full max-w-5xl px-4 text-center">
        <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
          Welcome Hibiscus
        </p>
        <h1 className="mb-8 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Experience the greatest for your holidays.
        </h1>

        {/* Booking form */}
        <div className="mx-auto max-w-3xl rounded bg-white/10 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
              <label
                htmlFor="checkin"
                className="mb-1 text-left text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                Check In
              </label>
              <input
                id="checkin"
                type="date"
                className="border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="checkout"
                className="mb-1 text-left text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                Check Out
              </label>
              <input
                id="checkout"
                type="date"
                className="border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="room-type"
                className="mb-1 text-left text-xs font-semibold uppercase tracking-wider text-white/80"
              >
                Room Type
              </label>
              <select
                id="room-type"
                className="border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:border-brand focus:outline-none"
              >
                <option value="">Select Room</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <button className="flex items-center justify-center gap-2 bg-brand px-6 py-3 font-heading text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-brand/90">
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
