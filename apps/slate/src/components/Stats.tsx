import { stats } from '../data'

export function Stats() {
  return (
    <section id="about" className="bg-slate py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-light text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
