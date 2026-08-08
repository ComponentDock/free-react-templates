import { CloudCog, GitBranch, Gauge, Lock, Users, Webhook } from 'lucide-react'

const features = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline',
    blurb: 'Automated builds and deployments from every push, with instant rollbacks.',
  },
  {
    icon: Gauge,
    title: 'Real-time Analytics',
    blurb: 'Live dashboards for traffic, errors and performance — no setup required.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    blurb: 'Shared environments, code reviews and permissions for the whole team.',
  },
  {
    icon: CloudCog,
    title: 'Auto-scaling',
    blurb: 'Scale from zero to millions of users without touching infrastructure.',
  },
  {
    icon: Lock,
    title: 'Security First',
    blurb: 'SOC 2 compliance, SSO and encrypted data at rest and in transit.',
  },
  {
    icon: Webhook,
    title: 'Developer API',
    blurb: 'A full REST and GraphQL API with webhooks for every event.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to ship
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            A complete development platform so your team can focus on building, not on plumbing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
