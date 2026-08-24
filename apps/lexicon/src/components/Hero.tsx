import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/lexicon-hero/1920/1080)',
        }}
      />
      {/* Warm brown gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b86e5a]/70 to-[rgba(88,55,48,0.43)]" />

      <div className="relative z-10 w-full px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Rest Journey in Single Step, in the Breathtaking
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Experience luxury and comfort in the heart of Prague
          </p>
        </div>

        {/* Booking search form */}
        <div
          id="booking"
          className="mx-auto mt-10 max-w-5xl rounded-lg bg-ink/80 p-6 backdrop-blur-sm"
        >
          <form
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="checkin" className="mb-1 block text-xs font-medium text-white/70">
                Check In
              </label>
              <input
                id="checkin"
                type="date"
                className="w-full rounded bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="checkout" className="mb-1 block text-xs font-medium text-white/70">
                Check Out
              </label>
              <input
                id="checkout"
                type="date"
                className="w-full rounded bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="adults" className="mb-1 block text-xs font-medium text-white/70">
                Adults
              </label>
              <select
                id="adults"
                className="w-full rounded bg-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </div>
            <div>
              <label htmlFor="children" className="mb-1 block text-xs font-medium text-white/70">
                Children
              </label>
              <select
                id="children"
                className="w-full rounded bg-white/10 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="0">0 Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                <Search size={16} aria-hidden="true" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
