import { Lightbulb } from 'lucide-react'

const steps = [
  { number: '01', title: 'Becoming A Dvd Repair Expert Online' },
  { number: '02', title: 'Becoming A Dvd Repair Expert Online' },
  { number: '03', title: 'Becoming A Dvd Repair Expert Online' },
] as const

export function Features() {
  return (
    <section id="about" className="bg-coal py-24 dark:bg-black sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          {steps.map((step) => (
            <article key={step.number} className="mb-8 last:mb-0">
              <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
                <span className="font-extrabold text-brand">{step.number}</span> {step.title}
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-mist">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </article>
          ))}
        </div>
        <div className="flex items-center justify-center rounded-3xl bg-gradient-to-b from-brand/40 to-pink-500/40 p-16">
          <Lightbulb className="h-28 w-28 text-white" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
