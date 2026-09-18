import { Package, Droplets, Truck } from 'lucide-react'

const steps = [
  {
    icon: Package,
    title: 'We collect your clothes',
    description:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
  },
  {
    icon: Droplets,
    title: 'Wash your clothes',
    description:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
  },
  {
    icon: Truck,
    title: 'Get delivery',
    description:
      'The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!',
  },
] as const

export function Process() {
  return (
    <section id="process" className="border-b border-gray-100 py-20 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            This is how we work
          </h2>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <step.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
