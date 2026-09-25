const infoItems = [
  { label: 'Date of Birth', value: 'Aug 25, 1988' },
  { label: 'Address', value: 'Rosia Road 55, Gibraltar, UK' },
  { label: 'E-mail', value: 'mariawilliams@company.com' },
  { label: 'Phone', value: '+43 5266 22 345' },
]

export function Hero() {
  return (
    <section id="hero" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-dark mb-6">Maria Williams</h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              I&apos;m a digital designer in love with photography, painting and discovering new
              worlds and cultures.
            </p>
            <div>
              <h3 className="text-xl font-bold text-dark mb-6">General Info</h3>
              <ul className="space-y-4">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="font-semibold text-dark min-w-[120px]">{item.label}</span>
                    <span className="text-muted">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://picsum.photos/seed/credentia-portrait/500/600"
              alt="Maria Williams portrait"
              className="w-full max-w-md rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
