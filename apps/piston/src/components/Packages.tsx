const packages = [
  {
    title: 'Muscle Build Pro',
    price: '$98.75',
    period: '/yr',
    desc: 'Full access to weight rooms, personal trainer sessions, and nutrition planning.',
    img: 'piston-pkg1',
  },
  {
    title: 'Women Strength Training',
    price: '$20.87',
    period: '/mo',
    desc: 'Specialized programs for women with dedicated coaching and group classes.',
    img: 'piston-pkg2',
  },
  {
    title: 'Fat Burning Pro',
    price: '$98.75',
    period: '/yr',
    desc: 'High-intensity interval training with meal plans and progress tracking.',
    img: 'piston-pkg3',
  },
]

export function Packages() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-2 text-3xl font-bold text-dark">Our Packages</h2>
        <p className="mb-12 text-mist">Choose the plan that fits your goals</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.title} className="overflow-hidden rounded border border-gray-200">
              <img
                src={`https://picsum.photos/seed/${p.img}/400/250`}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-dark">{p.title}</h3>
                <p className="mb-4 text-sm text-mist">{p.desc}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-brand">{p.price}</span>
                  <span className="text-mist">{p.period}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-block rounded bg-brand px-6 py-2 font-semibold text-dark transition hover:bg-brand-dark"
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
