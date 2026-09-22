const stats = [
  { value: '150', label: 'Yoga Classes' },
  { value: '1,000', label: 'Yoga Conducted' },
  { value: '65', label: 'Years Experienced' },
  { value: '71,650', label: 'Happy Customers' },
]

export function Counter() {
  return (
    <section className="bg-gray-900 py-16 sm:py-20" data-testid="counter">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-bold text-sage-400 sm:text-5xl">{value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
