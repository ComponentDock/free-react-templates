const rows = [
  {
    title: 'Road to Success',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud.',
    image: 'https://picsum.photos/seed/domicile-success1/800/500',
    reversed: false,
  },
  {
    title: 'Our Achievements',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    image: 'https://picsum.photos/seed/domicile-success2/800/500',
    reversed: true,
  },
] as const

export function SuccessStats() {
  return (
    <section id="services" className="bg-white">
      {rows.map((row, idx) => (
        <div
          key={idx}
          className={`flex flex-col ${row.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
        >
          <div className="flex w-full items-center px-8 py-12 lg:w-1/2 lg:px-16">
            <div className="max-w-lg">
              <h3 className="font-display text-3xl font-bold uppercase text-ink">{row.title}</h3>
              <p className="mt-4 leading-relaxed text-body">{row.text}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={row.image} alt={row.title} className="h-80 w-full object-cover lg:h-full" />
          </div>
        </div>
      ))}
    </section>
  )
}
