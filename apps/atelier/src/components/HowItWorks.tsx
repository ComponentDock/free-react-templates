import { Monitor, Lightbulb, Users } from 'lucide-react'

const steps = [
  {
    icon: Monitor,
    number: '01',
    title: 'Project Analysis',
    description:
      'We dive deep into your business goals and requirements to craft a tailored strategy.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design & Development',
    description: 'Our team brings your vision to life with pixel-perfect design and clean code.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Launch & Support',
    description: 'We deploy your project and provide ongoing support to ensure lasting success.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            How it works
          </p>
          <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">Working Process</h2>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Connector arrows — visible on md+ */}
          <div
            className="pointer-events-none absolute inset-x-0 top-16 hidden md:block"
            aria-hidden="true"
          >
            <svg
              className="mx-auto h-8 w-full"
              viewBox="0 0 600 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 16 Q200 0 300 16 Q400 32 500 16"
                stroke="#1264fa"
                strokeWidth="2"
                strokeDasharray="6 4"
                strokeLinecap="round"
              />
              <path
                d="M492 10 L500 16 L492 22"
                stroke="#1264fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-bold text-brand-500">Step {step.number}</p>
              <h3 className="mt-1 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-navy/50">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
