const steps = [
  { number: '01', title: 'Create Your Wallet' },
  { number: '02', title: 'Fund Your Wallet' },
  { number: '03', title: 'Start Trading' },
] as const

export function Process() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-medium text-brand md:text-5xl">
          Get Started With Bitcoin
        </h2>
        <div className="mt-16 grid gap-12 text-center sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-grad-start to-grad-end font-display text-3xl font-semibold text-white">
                {step.number}
              </div>
              <h4 className="mt-6 font-display text-2xl font-medium text-brand">{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
