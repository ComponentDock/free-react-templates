import { howItWorksSteps } from '../data'

export function HowItWorks() {
  return (
    <section className="bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-3 block font-script text-3xl text-accent">How It Works</span>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">
            Every Month, Millions of People
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Trust Town Hub to find the best places in their cities. Here is how it works.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-3">
          {howItWorksSteps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand/30">
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand" />
                </div>
                <span className="mb-2 block text-sm font-bold text-brand/80">{step.number}</span>
                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/50">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
