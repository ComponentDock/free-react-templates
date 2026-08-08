import { ArrowRight, CalendarDays, ChevronDown } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { Countdown } from './Countdown'

const stats = [
  { value: '3,000+', label: 'Attendees' },
  { value: '50+', label: 'Speakers' },
  { value: '3', label: 'Days' },
  { value: '20+', label: 'Workshops' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-950">
      {/* Aurora mesh: gradient base + blurred glow orbs + grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-primary-950 via-gray-950 to-accent-950"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary-500/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-500/30 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-28 text-center lg:px-8">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          <CalendarDays className="h-4 w-4 text-primary-400" aria-hidden="true" />
          March 15-17, 2032 • San Francisco, CA
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          The Premier{' '}
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Technology
          </span>{' '}
          Conference
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Join 3,000+ tech leaders, engineers, and visionaries for three days of inspiring keynotes,
          hands-on workshops, and world-class networking.
        </p>

        <div className="mt-12">
          <Countdown />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#tickets"
            className="rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-shadow hover:shadow-xl"
          >
            Get Your Tickets
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#speakers"
            className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10"
          >
            View Speakers
          </ButtonLink>
        </div>

        <dl className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-4xl font-bold text-white">{stat.value}</dt>
              <dd className="mt-1 text-sm text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-gray-400">
        <span className="text-xs font-medium uppercase tracking-widest">SCROLL</span>
        <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
