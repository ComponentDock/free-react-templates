import { Reveal } from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Connect Your Data',
    blurb: 'Bring data from warehouses, lakes or live streams with one-click connectors.',
  },
  {
    number: '02',
    title: 'Train & Fine-tune',
    blurb: 'AutoML trains a baseline model; fine-tune it on your domain in minutes.',
  },
  {
    number: '03',
    title: 'Deploy & Scale',
    blurb: 'Deploy to a serverless runtime that scales to millions of requests per day.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            From Data to Intelligence in Minutes
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            A simple three-step path from raw data to a production model.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 100}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="font-display text-6xl font-bold text-primary-600/15 dark:text-primary-500/20">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
