import { ArrowRight, BarChart3, Play, Users } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const stats = [
  { value: '10k+', label: 'Active users' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50+', label: 'Integrations' },
  { value: '4.9★', label: 'User rating' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white px-4 pb-20 pt-16 lg:pb-28 lg:pt-24 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Soft violet glow orbs */}
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/30"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-40 h-72 w-72 rounded-full bg-primary-100/60 blur-[100px] dark:bg-primary-900/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              New with AI-powered automation
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Build better products,
              <br />
              <span className="text-gradient">faster than ever</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
              The all-in-one platform that helps teams ship quality software. Automate workflows,
              collaborate seamlessly, and scale with confidence.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink
                href="#pricing"
                className="px-6 py-3 text-base shadow-lg shadow-primary-600/30"
              >
                Start free trial
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href="#demo"
                variant="outline"
                className="border-gray-300 bg-white px-6 py-3 text-base text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Play className="h-5 w-5 fill-primary-600 text-primary-600" aria-hidden="true" />
                Watch demo
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-4 dark:border-gray-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Dashboard preview — static mock panel (dark sidebar + metric cards) */}
        <Reveal delay={500}>
          <div
            role="img"
            aria-label="Product dashboard preview"
            className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-200 lg:mt-24 dark:ring-gray-800"
          >
            <div className="flex bg-gray-900">
              {/* Sidebar */}
              <div className="hidden w-48 shrink-0 flex-col gap-1 border-r border-gray-800 p-4 sm:flex">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary-600 text-xs font-bold text-white">
                    Z
                  </span>
                  <span className="text-sm font-semibold text-white">Zenith</span>
                </div>
                {['Overview', 'Analytics', 'Customers', 'Billing', 'Settings'].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={cn(
                        'rounded-md px-3 py-2 text-sm',
                        index === 0 ? 'bg-primary-600 text-white' : 'text-gray-400',
                      )}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
              {/* Main panel */}
              <div className="flex-1 bg-gray-100 p-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">Total Revenue</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">$24,563</p>
                    <p className="mt-1 text-xs text-emerald-600">+18.2% this month</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">Active Users</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">1,234</p>
                    <p className="mt-1 text-xs text-emerald-600">+6.4% this month</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-medium text-gray-500">Uptime</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">98.5%</p>
                    <p className="mt-1 text-xs text-emerald-600">99.9% SLA target</p>
                  </div>
                </div>
                <div className="mt-4 hidden items-center gap-3 rounded-xl bg-white p-4 shadow-sm sm:flex">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <BarChart3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Monthly growth</p>
                    <div className="mt-2 flex h-2 gap-1">
                      {[40, 65, 50, 80, 60, 90, 75].map((height, index) => (
                        <span
                          key={index}
                          className="flex-1 rounded-full bg-primary-500"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <Users className="h-5 w-5 text-gray-300" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
