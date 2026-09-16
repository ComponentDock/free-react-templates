const stats = [
  { value: '1,005,000', label: 'Members' },
  { value: '65,000', label: 'Pastors' },
  { value: '500,000', label: 'Donations' },
  { value: '50', label: 'Churches' },
]

export function Counter() {
  return (
    <section className="py-16 bg-counter-bg">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/4">
            <h2 className="text-white text-lg font-bold uppercase leading-snug">
              We&apos;re on a mission to help all your problems
            </h2>
          </div>
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
