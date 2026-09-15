import { FileText, Users, Percent, ClipboardCheck } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Get Your Legal Advice',
    description:
      'Our expert attorneys provide comprehensive legal advice tailored to your specific needs and situation.',
  },
  {
    icon: Users,
    title: 'Work with Expert Lawyers',
    description:
      'Connect with experienced lawyers who specialize in various areas of law to represent your interests.',
  },
  {
    icon: Percent,
    title: 'Have Great Discounted Rates',
    description:
      'We offer competitive and transparent pricing with flexible payment options for all our services.',
  },
  {
    icon: ClipboardCheck,
    title: 'Review Your Case Documents',
    description:
      'Our team thoroughly reviews all case documents to build a strong foundation for your legal matter.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-md bg-[#f7f7f7] p-7 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-500">
                <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-[#1d2124]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
