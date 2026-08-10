import { Package, RotateCcw, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Refund Policy',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    Icon: RotateCcw,
  },
  {
    title: 'Premium Packaging',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    Icon: Package,
  },
  {
    title: 'Superior Quality',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    Icon: ShieldCheck,
  },
] as const

export function Services() {
  return (
    <section className="bg-cream py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold uppercase tracking-wide text-ink dark:text-white">
          We want you to express yourself
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map(({ title, text, Icon }) => (
            <div key={title} className="bg-white p-8 text-center shadow-sm dark:bg-gray-950">
              <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
