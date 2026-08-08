import { ArrowRight, PackageSearch, ShieldCheck, Headset, PackageCheck } from 'lucide-react'

const trustBadges = [
  { label: 'Free tracking', icon: PackageSearch },
  { label: 'Insured shipments', icon: ShieldCheck },
  { label: '24/7 support', icon: Headset },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-900/90 via-primary-950 to-gray-950"
    >
      {/* Faint grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ship Anywhere,{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Anytime
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            Global freight forwarding, warehousing, and express delivery — all managed from one
            dashboard. Reliable shipping solutions for businesses of every size.
          </p>
          <a
            href="#services"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-700"
          >
            Explore Services
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          <div className="mt-12 flex flex-wrap gap-8">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2.5 text-sm font-medium text-gray-300"
              >
                <badge.icon className="h-5 w-5 text-primary-400" aria-hidden="true" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
          <h3 className="flex items-center gap-2.5 text-xl font-semibold text-white">
            <PackageSearch className="h-5 w-5 text-primary-400" aria-hidden="true" />
            Track Your Shipment
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Enter your tracking number to see real-time updates.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="tracking-number" className="sr-only">
              Tracking number
            </label>
            <input
              id="tracking-number"
              type="text"
              placeholder="Enter tracking number"
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Track Package
            </button>
          </form>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <PackageCheck className="h-5 w-5 text-status-500" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white">In Transit</p>
              <p className="text-xs text-gray-400">Est. delivery: Tomorrow, 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
