import { Server, Globe, Award, ShieldCheck, Mail, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: <Server className="h-10 w-10 text-brand-end" />,
    title: 'SSD Cloud Hosting',
    desc: 'Lightning-fast SSD storage with cloud infrastructure for maximum performance.',
  },
  {
    icon: <Globe className="h-10 w-10 text-brand-end" />,
    title: 'Free Domain Transfer',
    desc: 'Transfer your existing domain effortlessly with zero downtime.',
  },
  {
    icon: <Award className="h-10 w-10 text-brand-end" />,
    title: 'Best Hosting Service',
    desc: 'Award-winning hosting with 99.9% uptime and premium support.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-brand-end" />,
    title: 'Strong Backup',
    desc: 'Automated daily backups with one-click restoration for peace of mind.',
  },
  {
    icon: <Mail className="h-10 w-10 text-brand-end" />,
    title: 'Email Service',
    desc: 'Professional email hosting with spam protection and custom domains.',
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-brand-end" />,
    title: 'Data Analysis',
    desc: 'Comprehensive analytics dashboard to monitor your site performance.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-14 text-center">
        <h2 className="mb-3 text-3xl font-bold text-heading lg:text-4xl">High Quality Service</h2>
        <div className="mx-auto h-px w-24 bg-heading/20" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded p-8 text-center transition-shadow hover:shadow-lg hover:shadow-heading/10"
          >
            <div className="mb-6 flex justify-center">{s.icon}</div>
            <h3 className="mb-3 text-lg font-bold text-heading">{s.title}</h3>
            <p className="text-sm text-body">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
