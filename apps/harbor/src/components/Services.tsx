import { Cloud, Database, PenTool, Rocket, Server, ShieldCheck } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const SERVICES = [
  {
    icon: Server,
    title: 'Shared Hosting',
    price: 'Starts at $2.80',
    blurb: 'Everything a small site needs, with a free domain, SSL and daily backups.',
  },
  {
    icon: PenTool,
    title: 'WordPress Hosting',
    price: 'Starts at $4.20',
    blurb: 'WordPress installed and kept updated, with caching tuned for speed.',
  },
  {
    icon: Database,
    title: 'Dedicated Hosting',
    price: 'Starts at $79.00',
    blurb: 'A whole server for your projects, with full root access and DDoS protection.',
  },
  {
    icon: ShieldCheck,
    title: 'SSL Certificate',
    price: 'Free on every plan',
    blurb: 'Certificates on every plan, renewed automatically; paid EV options too.',
  },
  {
    icon: Cloud,
    title: 'Web Hosting',
    price: 'Starts at $3.90',
    blurb: 'Fast SSD hosting for several sites, with unlimited email accounts.',
  },
  {
    icon: Rocket,
    title: 'Cloud Server',
    price: 'Starts at $12.00',
    blurb: 'Scalable VPS with dedicated CPU and RAM you can resize at any time.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle>Choose the right hosting solution</SectionTitle>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-[10px] bg-white px-10 pb-5 pt-10 shadow-[0_0_10px_rgba(18,8,81,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(18,8,81,0.2)] focus-within:shadow-[0_8px_30px_rgba(18,8,81,0.2)]"
              >
                <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-[#111]">{service.title}</h3>
                <p className="mt-1 text-[15px] font-medium text-brand">{service.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#666]">{service.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
