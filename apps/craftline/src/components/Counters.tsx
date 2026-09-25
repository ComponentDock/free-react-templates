interface CounterItem {
  label: string
  target: number
}

const counters: CounterItem[] = [
  { label: 'Cups of coffee', target: 309 },
  { label: 'Projects', target: 356 },
  { label: 'Clients', target: 30 },
  { label: 'Partners', target: 10 },
]

export function Counters() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/craftline-counter/1200/400)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counters.map((item) => (
            <div key={item.label}>
              <span className="text-4xl md:text-5xl font-bold text-white">{item.target}</span>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
