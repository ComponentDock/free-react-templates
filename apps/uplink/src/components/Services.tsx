import { BarChart3, Cloud, Cpu, Database, Globe, Server } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Hosting',
    text: 'Scalable cloud instances with load balancing and automated failover.',
  },
  {
    icon: Globe,
    title: 'Web Hosting',
    text: 'Shared and managed hosting with cPanel, free SSL, and daily backups.',
  },
  {
    icon: Cpu,
    title: 'Cloud Computing',
    text: 'On-demand compute and object storage for apps of any size.',
  },
  {
    icon: Server,
    title: 'VPS Hosting',
    text: 'Full root access on isolated virtual servers with SSD speed.',
  },
  {
    icon: BarChart3,
    title: 'Server Analytics',
    text: 'Real-time dashboards for traffic, resource usage, and security events.',
  },
  {
    icon: Database,
    title: 'Data Mining',
    text: 'Batch processing and analytics pipelines tuned for large datasets.',
  },
] as const

/** Purple services band with a dotted map-pattern overlay. */
export function Services() {
  return (
    <section id="services" className="relative bg-primary-500 py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1.5px,transparent_1.5px)] bg-[length:26px_26px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium text-white">Top Services We Provided</h2>
          <p className="mt-4 text-sm leading-6 text-white opacity-60">
            From shared hosting to dedicated infrastructure, every service ships with proactive
            monitoring and a 30-day guarantee.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-[10px] border border-purple-line bg-white/10 p-10 transition-colors duration-300 hover:bg-white"
            >
              <h3 className="flex items-center gap-3 text-lg font-medium text-white transition-colors duration-300 group-hover:text-ink-900">
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                {title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white opacity-60 transition-colors duration-300 group-hover:text-mute-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
