const counters = [
  { value: '250', label: 'Happy Clients' },
  { value: '15', label: 'Years Experience' },
  { value: '50', label: 'Team Members' },
  { value: '1000', label: 'Projects Completed' },
] as const

export function Counters() {
  return (
    <section className="py-16 bg-primary-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((counter) => (
            <div key={counter.label} className="text-center">
              <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                {counter.value}
                <span className="text-primary-200">+</span>
              </div>
              <p className="mt-2 text-sm font-medium text-primary-100">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
