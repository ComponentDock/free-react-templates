import { Users, Cog, ShieldCheck, DollarSign } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Professional Staff',
    description:
      'Our team of experienced woodworkers and carpenters bring decades of combined expertise to every project.',
  },
  {
    icon: Cog,
    title: 'Latest Machinery',
    description:
      'We invest in state-of-the-art tools and CNC equipment to deliver precision cuts and flawless finishes.',
  },
  {
    icon: ShieldCheck,
    title: 'Certified Material',
    description:
      'All lumber and materials are sourced from certified, sustainable suppliers for quality and environmental care.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Cost',
    description:
      'Premium craftsmanship at competitive pricing — we work within your budget without compromising quality.',
  },
] as const

export function ChooseUs() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Why Us
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold uppercase text-ink dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
