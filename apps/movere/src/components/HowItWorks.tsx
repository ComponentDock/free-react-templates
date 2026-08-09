import { Reveal } from './Reveal'

const steps = [
  {
    number: '01',
    title: 'Request a Quote',
    blurb:
      'Tell us where you are moving and what you are taking. Get a free, no-obligation estimate within hours.',
  },
  {
    number: '02',
    title: 'Schedule Your Move',
    blurb:
      'Pick a date and time that works for you. We confirm everything in writing, including the price.',
  },
  {
    number: '03',
    title: 'We Handle Everything',
    blurb:
      'Our trained crew packs, loads, transports, and unloads with care — you stay in control the whole way.',
  },
  {
    number: '04',
    title: 'Welcome Home',
    blurb:
      'We place every box where you want it and walk you through a final checklist before we leave.',
  },
] as const

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            How It Works
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Your Move in 4 Easy Steps
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            A simple, proven process that takes the stress out of moving day.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-base font-extrabold text-white dark:bg-primary-500">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {step.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
