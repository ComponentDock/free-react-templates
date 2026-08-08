import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '500K+', label: 'Deployments' },
  { value: '40+', label: 'Global Regions' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '<50ms', label: 'Global Latency' },
] as const

const terminalLines = [
  { text: '$ stratos login', className: 'text-gray-300' },
  { text: 'Authenticated as hello@stratos.dev', className: 'text-gray-500' },
  { text: '$ stratos deploy', className: 'text-gray-300' },
  { text: 'Detecting framework... React 19', className: 'text-gray-500' },
  { text: 'Building... done (12s)', className: 'text-gray-500' },
  { text: 'Deploying to 40 regions...', className: 'text-gray-500' },
  { text: 'Running health checks...', className: 'text-gray-500' },
  { text: 'Deployment successful!', className: 'font-semibold text-green-400' },
  { text: 'URL: https://myapp.stratos.app', className: 'text-gray-500' },
  { text: 'Latency: <50ms globally', className: 'text-gray-500' },
  { text: '$', className: 'text-gray-300' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-primary-950 to-gray-950"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              Trusted by 10,000+ developers worldwide
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deploy at the{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Speed of Light
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              The developer-first cloud platform for deploying, scaling, and managing modern
              applications. Push your code and let Stratos handle the rest.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="#cta"
                className="rounded-lg bg-primary-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700"
              >
                Start Deploying Free
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#services"
                className="rounded-lg border-2 border-white/15 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                View Documentation
              </ButtonLink>
            </div>

            <dl className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="text-2xl font-bold text-primary-400 lg:text-3xl">{stat.value}</dd>
                  <dt className="mt-1 text-sm text-gray-400">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-gray-900/80 shadow-2xl shadow-primary-500/10 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 bg-gray-900 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
                <span className="ml-2 text-xs text-gray-500">stratos — zsh</span>
              </div>
              <div className="space-y-1.5 px-4 py-5 font-mono text-sm">
                {terminalLines.map((line) => (
                  <p key={line.text} className={line.className}>
                    {line.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
