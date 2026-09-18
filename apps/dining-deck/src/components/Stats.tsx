const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '50+', label: 'Branches Worldwide' },
  { value: '100+', label: 'Menu Items' },
  { value: '30+', label: 'Expert Staff' },
]

export function Stats() {
  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-teal-500 md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
