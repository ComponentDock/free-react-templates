const features = [
  {
    title: 'Free shipping',
    description: 'On all orders over $100, worldwide.',
  },
  {
    title: '30 day returns',
    description: 'Not right? Send it back, no questions.',
  },
  {
    title: 'Made responsibly',
    description: 'Traceable materials and fair factories.',
  },
]

export function Features() {
  return (
    <section className="py-16 px-5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Why shop with us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-warm-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
