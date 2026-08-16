import { FileEdit, FileText, Mail, Search, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { services, servicesIntro, servicesTitle, type Service } from '../data'

const serviceIcons: Record<Service['icon'], LucideIcon> = {
  blogging: FileText,
  seo: Search,
  email: Mail,
  content: FileEdit,
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.icon]
  return (
    <article className={cn('mb-[50px] lg:col-span-5', index % 2 === 1 && 'lg:col-start-7')}>
      <Icon className="mb-6 h-12 w-12 text-ink" strokeWidth={1.5} aria-hidden="true" />
      <h3>
        <a
          href="#services"
          className="text-2xl font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {service.title}
        </a>
      </h3>
      <p className="mt-3 max-w-[440px] text-base font-light leading-relaxed text-ink/90">
        {service.description}
      </p>
    </article>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-cream py-[100px]">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="mb-[110px] grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="relative pb-[20px] font-display text-[32px] font-bold tracking-[-0.05em] text-ink sm:text-[50px]">
              {servicesTitle}
              {/* Blue underline bar (180 × 6px) below the title. */}
              <span
                aria-hidden="true"
                className="absolute bottom-[-50px] left-0 h-[6px] w-[180px] bg-accent"
              />
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg font-light leading-relaxed text-ink">{servicesIntro}</p>
          </div>
        </div>
        <div className="grid gap-x-6 lg:grid-cols-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
