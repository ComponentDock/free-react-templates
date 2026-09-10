const steps = [
  {
    num: 1,
    title: 'Online Applications',
    desc: 'Fill out our simple online application form in just a few minutes.',
  },
  {
    num: 2,
    title: 'Get an Approval',
    desc: 'Our team reviews your application and provides quick approval decisions.',
  },
  {
    num: 3,
    title: 'Card Delivery',
    desc: 'Receive your new card delivered straight to your doorstep.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">How It Works</h2>
          <p className="mx-auto max-w-xl text-gray-300">
            Getting started with our banking services is simple and straightforward.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold">
                {s.num}
              </div>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
