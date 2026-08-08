import { Badge, ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '10K+', label: 'Teams Worldwide' },
  { value: '50M+', label: 'Deals Tracked' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'User Rating' },
] as const

const chartBars = [
  { label: 'Qualified', value: '42', height: 'h-24' },
  { label: 'Proposal', value: '28', height: 'h-16' },
  { label: 'Negotiation', value: '15', height: 'h-10' },
  { label: 'Closed Won', value: '$890K', height: 'h-20' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-950 via-blue-950/30 to-gray-950 pb-20 pt-32"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Trusted by 10,000+ sales teams worldwide
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Close More Deals with <span className="text-primary-400">AI-Powered CRM</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Dealflow is the modern CRM that helps sales teams manage pipelines, automate outreach,
            and close deals faster with AI-powered insights and intelligent workflow automation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="#contact"
              className="w-full rounded-full px-8 py-3.5 text-base font-semibold shadow-lg shadow-primary-600/30 sm:w-auto"
            >
              Start Free Trial
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="outline"
              className="w-full rounded-full border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
            >
              Book a Demo
            </ButtonLink>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-gray-400">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Dashboard mockup */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -right-2 -top-4 z-10">
            <Badge variant="success" className="gap-1.5 px-3 py-1 shadow-lg">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Live Demo
            </Badge>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                app.dealflow.app/dashboard
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">Revenue Pipeline</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl font-bold text-white">$2.4M</span>
                <Badge variant="success">+24% this month</Badge>
              </div>

              <div className="mt-8 flex items-end gap-4 sm:gap-6">
                {chartBars.map((bar) => (
                  <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
                    <span className="text-sm font-semibold text-gray-300">{bar.value}</span>
                    <div className="flex h-32 w-full items-end rounded-lg bg-white/5">
                      <div
                        className={`w-full rounded-t-lg bg-gradient-to-t from-primary-700 to-primary-400 ${bar.height}`}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs text-gray-500">{bar.label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-gray-500">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
