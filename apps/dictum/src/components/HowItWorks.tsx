const steps = [
  {
    number: '01',
    title: 'Innovate',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    number: '02',
    title: 'Create',
    description:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    number: '03',
    title: 'Scale',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-mist">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">
            How it works
          </span>
          <h2 className="text-3xl font-bold text-ink mt-2">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center bg-white p-8 rounded-lg shadow-sm">
              <span className="text-4xl font-bold text-primary-300">{step.number}</span>
              <h3 className="text-xl font-semibold text-ink mt-4 mb-3">{step.title}</h3>
              <p className="text-smoke text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
