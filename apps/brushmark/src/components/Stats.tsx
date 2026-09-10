const stats = [
  { value: '15k+', label: 'Happy Customers' },
  { value: '12k+', label: 'Ticket Solved' },
  { value: '9/10', label: 'Average Rating' },
]

export function Stats() {
  return (
    <section className="relative z-10 -mt-16 bg-paper py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gray-200">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center py-4 text-center sm:py-0">
            <span className="bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-mist">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
