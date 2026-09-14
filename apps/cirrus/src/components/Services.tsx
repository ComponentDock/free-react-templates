import { Cloud, Server, FolderOpen, TrendingUp, Archive, Monitor } from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud databases',
    desc: 'Scalable, managed databases in the cloud that adapt to your workload.',
  },
  {
    icon: Server,
    title: 'Website Hosting',
    desc: 'High-performance hosting with 99.9% uptime and global CDN.',
  },
  {
    icon: FolderOpen,
    title: 'File Storage',
    desc: 'Secure, durable object storage for any amount of data.',
  },
  {
    icon: TrendingUp,
    title: 'Forex Trading',
    desc: 'Real-time market data and trading infrastructure for financial apps.',
  },
  {
    icon: Archive,
    title: 'File Backups',
    desc: 'Automated backups with point-in-time recovery and encryption.',
  },
  {
    icon: Monitor,
    title: 'Remote Desktop',
    desc: 'Access your desktop environment from anywhere, on any device.',
  },
]

export function Services() {
  return (
    <section className="bg-panel py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-heading">Cloud Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="flex items-start gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-green text-white transition-colors group-hover:bg-white group-hover:text-brand-green">
                <s.icon size={44} />
              </div>
              <div className="pt-2">
                <h3 className="mb-2 text-lg font-semibold text-heading">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
