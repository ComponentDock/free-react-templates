const plans = [
  {
    title: 'Weight Lifting',
    price: '$240',
    img: 'ironpulse-price1',
  },
  {
    title: 'Crossfit Training',
    price: '$240',
    img: 'ironpulse-price2',
  },
  {
    title: 'Cardio Blast',
    price: '$240',
    img: 'ironpulse-price3',
  },
]

export function Pricing() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-dark">Pricing For Courses</h2>
        <p className="mb-12 text-mist">Choose the plan that fits your goals</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="relative overflow-hidden rounded">
              <img
                src={`https://picsum.photos/seed/${p.img}/400/400`}
                alt={p.title}
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="mb-2 text-3xl font-bold">{p.price}</span>
                <h3 className="mb-4 text-xl font-semibold">{p.title}</h3>
                <a
                  href="#contact"
                  className="rounded bg-brand px-6 py-2 font-semibold text-dark transition hover:bg-brand-dark"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
