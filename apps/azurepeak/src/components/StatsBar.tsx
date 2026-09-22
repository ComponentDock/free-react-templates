const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '10000+', label: 'Happy Guests' },
  { value: '150+', label: 'Luxury Rooms' },
  { value: '25+', label: 'Industry Awards' },
]

export function StatsBar() {
  return (
    <section className="bg-white py-12 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-blue-800 dark:text-blue-400">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
