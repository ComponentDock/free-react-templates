import { Container, Database, HardDrive, Rocket, Scale, Zap } from 'lucide-react'

const features = [
  {
    title: 'App Hosting',
    description:
      'Deploy any framework instantly. Auto-scaling, zero-config SSL, and global CDN included. Push to Git and your app is live in seconds.',
    icon: Rocket,
  },
  {
    title: 'Managed Databases',
    description:
      'Fully managed PostgreSQL, MySQL, and Redis with automated backups, point-in-time recovery, and read replicas.',
    icon: Database,
  },
  {
    title: 'Edge Functions',
    description:
      'Run serverless code at the edge in 40+ regions. Sub-50ms cold starts with automatic scaling from zero to millions of requests.',
    icon: Zap,
  },
  {
    title: 'Object Storage',
    description:
      'S3-compatible object storage with global CDN. Store and serve images, videos, and static assets at lightning speed.',
    icon: HardDrive,
  },
  {
    title: 'Container Registry',
    description:
      'Private Docker registry with vulnerability scanning, image signing, and seamless integration with your CI/CD pipeline.',
    icon: Container,
  },
  {
    title: 'Load Balancing',
    description:
      'Global load balancing with automatic failover, SSL offloading, and health checks to keep your applications fast and available everywhere.',
    icon: Scale,
  },
] as const

export function Features() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-300">
            Products
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything You Need to Ship
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From app hosting to managed databases, Stratos provides the complete infrastructure
            stack for modern development teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
