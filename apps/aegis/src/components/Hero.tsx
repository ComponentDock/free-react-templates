import { ArrowUpRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Typewriter } from './Typewriter'

const heroStats = [
  { value: '10M+', label: 'Endpoints Protected' },
  { value: '500B+', label: 'Events Analyzed' },
  { value: '0.001%', label: 'False Positive Rate' },
  { value: '24/7', label: 'SOC Coverage' },
] as const

const detections = [
  {
    title: 'Ransomware attempt blocked',
    detail: 'endpoint-ws042 · 2 min ago',
    severity: 'Critical',
    tone: 'bg-red-500',
  },
  {
    title: 'Suspicious login from new location',
    detail: 'user: j.smith · 8 min ago',
    severity: 'Medium',
    tone: 'bg-amber-500',
  },
  {
    title: 'Vulnerability patched automatically',
    detail: 'CVE-2026-1847 · 23 min ago',
    severity: 'Resolved',
    tone: 'bg-green-500',
  },
] as const

function ThreatDashboard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-900 p-6 shadow-2xl shadow-primary-900/10 dark:border-gray-800 dark:bg-gray-900/80">
      {/* Dashboard header */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/20">
            <ShieldCheck className="h-4 w-4 text-primary-400" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-white">Threat Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
          <span className="text-xs text-green-400">All Systems Protected</span>
        </div>
      </div>

      {/* Stat tiles */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-gray-800/50 p-3">
          <div className="text-xs text-gray-500">Threats Blocked</div>
          <div className="mt-1 text-xl font-bold text-white">2,847</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-green-400">
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            12% today
          </div>
        </div>
        <div className="rounded-lg bg-gray-800/50 p-3">
          <div className="text-xs text-gray-500">Active Endpoints</div>
          <div className="mt-1 text-xl font-bold text-white">14,329</div>
          <div className="mt-1 flex items-center gap-1 text-xs text-primary-400">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden="true" />
            All healthy
          </div>
        </div>
        <div className="rounded-lg bg-gray-800/50 p-3">
          <div className="text-xs text-gray-500">Risk Score</div>
          <div className="mt-1 text-xl font-bold text-green-400">Low</div>
          <div className="mt-1 text-xs text-gray-500">Score: 12/100</div>
        </div>
      </div>

      {/* Recent detections feed */}
      <div className="mt-4">
        <div className="text-xs font-medium text-gray-500">Recent Detections</div>
        <ul className="mt-2 space-y-2">
          {detections.map((item) => (
            <li
              key={item.title}
              className="flex items-center justify-between rounded-lg bg-gray-800/50 px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.tone}`}
                  aria-hidden="true"
                />
                <div>
                  <div className="text-xs font-medium text-white">{item.title}</div>
                  <div className="text-[11px] text-gray-500">{item.detail}</div>
                </div>
              </div>
              <span className="shrink-0 text-[11px] font-medium text-gray-400">
                {item.severity}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-gray-50 via-primary-50/40 to-white py-20 lg:py-28 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden="true" />
            Trusted by 2,000+ Security Teams Worldwide
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Stop Threats Before They{' '}
            <Typewriter words={['Strike', 'Spread', 'Escalate', 'Damage']} />
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
            Aegis delivers AI-powered threat detection, automated response, and continuous
            monitoring to protect your endpoints, cloud workloads, and identities — all from a
            single unified platform.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 text-base font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 dark:shadow-primary-900/40"
            >
              Start Free Trial
            </a>
            <a
              href="#solutions"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Watch Demo
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-primary-600 lg:text-3xl dark:text-primary-400">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block">
          <ThreatDashboard />
        </div>
      </div>
    </section>
  )
}
