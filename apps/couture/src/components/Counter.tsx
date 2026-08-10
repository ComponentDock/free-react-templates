const stats = [
  { value: '10000+', label: 'Happy Customers' },
  { value: '100+', label: 'Branches' },
  { value: '1000+', label: 'Partner' },
  { value: '100+', label: 'Awards' },
] as const

export function Counter() {
  return (
    <section className="relative overflow-hidden bg-black py-16">
      <img
        src="https://picsum.photos/seed/couture-8/1600/600"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-5xl font-bold text-brand">{stat.value}</p>
            <p className="mt-2 font-display text-sm uppercase tracking-widest text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
