const features = [
  {
    number: '01',
    title: 'Responsive View',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
  {
    number: '02',
    title: 'Multiple Layouts',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
  {
    number: '03',
    title: 'Flexible Design',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white pb-48 pt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map(({ number, title, description }) => (
            <div key={number} className="flex gap-6">
              <div className="shrink-0">
                <h2 className="bg-gradient-to-b from-brand-500 to-accent-300 bg-clip-text text-5xl font-semibold uppercase text-transparent drop-shadow-md">
                  {number}
                </h2>
              </div>
              <div>
                <h3 className="mb-4 text-base font-semibold uppercase tracking-wider text-gray-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
