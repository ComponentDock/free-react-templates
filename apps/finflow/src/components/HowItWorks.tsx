import { ButtonLink } from '@free-react-templates/ui'

const steps = [
  {
    number: '01',
    title: 'Online Applications',
    description: 'Fill out our simple online application form from the comfort of your home.',
  },
  {
    number: '02',
    title: 'Get an Approval',
    description: 'Our team reviews your application quickly and provides instant approval.',
  },
  {
    number: '03',
    title: 'Card Delivery',
    description: 'Receive your new card delivered directly to your doorstep within days.',
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Process
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink dark:text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                {step.description}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href="#contact"
                  className="rounded-lg bg-brand px-6 py-2 text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
