const steps = [
  {
    num: '01',
    title: 'Pick a suitable plan',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
  {
    num: '02',
    title: 'Set your schedule',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
  {
    num: '03',
    title: 'Get things done',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
]

export function WorkSteps() {
  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/sweeply-steps/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">
            How it Works
          </span>
          <h2 className="text-3xl font-bold text-white mt-3">
            Get Amazing Cleaning in 3 Simple Ways
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center text-white px-4">
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <span className="absolute inset-0 rounded-full border-2 border-white/20" />
                <span className="text-3xl font-bold text-white">{step.num}</span>
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
