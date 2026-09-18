import { stats } from '../data'

export function Stats() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h1 className="mb-2 text-4xl font-bold text-white">{stat.value.toLocaleString()}</h1>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
