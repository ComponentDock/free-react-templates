const STEPS = [
  { number: '01', title: 'Information Gathering' },
  { number: '02', title: 'Planning' },
  { number: '03', title: 'Design' },
  { number: '04', title: 'Development' },
  { number: '05', title: 'Testing and Delivery' },
  { number: '06', title: 'Maintenance' },
]

export function Process() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-text">Our process</h2>
        <a
          href="#services"
          className="mb-12 inline-block border-2 border-brand-pink px-8 py-3 text-xs font-bold uppercase tracking-wider text-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
        >
          Learn More
        </a>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="group p-6 text-center">
              <span className="mb-4 inline-block text-4xl font-bold text-brand-pink">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
