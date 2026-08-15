import { stats } from '../data'

export function StatsBand() {
  return (
    <section
      aria-label="Company statistics"
      className="bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/marina-stats/1920/900)' }}
    >
      <div className="bg-overlay">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-24 text-center text-white sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-[50px] font-bold leading-none">{stat.value}</p>
              <p className="mt-3 font-body text-base font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
