import { BarChart3, Code2, Gauge, Network, ShieldCheck, Webhook } from 'lucide-react'

const features = [
  {
    title: 'API Gateway',
    blurb:
      'Route, transform, and secure API traffic with a high-performance gateway. Supports REST, GraphQL, and gRPC protocols out of the box.',
    icon: Network,
  },
  {
    title: 'Rate Limiting',
    blurb:
      'Protect your APIs with intelligent rate limiting. Set per-key, per-endpoint, and sliding window limits with real-time enforcement.',
    icon: Gauge,
  },
  {
    title: 'Authentication',
    blurb:
      'API key management, OAuth 2.0, JWT validation, and RBAC built in. Secure every endpoint without writing auth code.',
    icon: ShieldCheck,
  },
  {
    title: 'Analytics Dashboard',
    blurb:
      'Real-time metrics on latency, throughput, errors, and usage patterns. Custom dashboards with alerting and anomaly detection.',
    icon: BarChart3,
  },
  {
    title: 'Webhook Management',
    blurb:
      'Reliable webhook delivery with automatic retries, event filtering, and delivery logs. Never miss a critical event notification.',
    icon: Webhook,
  },
  {
    title: 'SDK Generation',
    blurb:
      'Auto-generate type-safe client SDKs in 20+ languages from your API spec. Keep clients in sync with every API change.',
    icon: Code2,
  },
] as const

export function Features() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Platform
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to Ship APIs
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {feature.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
