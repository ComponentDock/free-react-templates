import { ArrowRight, CalendarDays, MapPin, RefreshCcw, ShieldCheck, Zap } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const trustItems = [
  { icon: ShieldCheck, label: 'Secure checkout' },
  { icon: RefreshCcw, label: '30-day refund policy' },
  { icon: Zap, label: 'Instant confirmation' },
]

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-20 lg:py-28">
      {/* Aurora/grid overlay reuse */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-gray-950 to-accent-950"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-primary-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-[24rem] w-[24rem] rounded-full bg-accent-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
          Limited tickets remaining
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Don't Miss{' '}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Out
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Join us for three days of inspiring talks, hands-on workshops, and networking with
          industry leaders. Secure your spot today.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-gray-300 sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary-400" aria-hidden="true" />
            March 15-17, 2032
          </span>
          <span className="hidden text-gray-600 sm:inline">•</span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary-400" aria-hidden="true" />
            Moscone Center, San Francisco, CA
          </span>
        </div>

        <div className="mt-10">
          <ButtonLink
            href="#tickets"
            className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl"
          >
            Get Tickets Now
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-2 text-sm text-gray-400">
              <item.icon className="h-4 w-4 text-primary-400" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
