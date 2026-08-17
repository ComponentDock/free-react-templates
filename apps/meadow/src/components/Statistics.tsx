import { stats, statsEyebrow, statsTitle } from '../data'

export function Statistics() {
  return (
    <section
      id="stats"
      data-testid="statistics-section"
      className="relative bg-brand bg-cover bg-center py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/meadow-stats/1920/1080')" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-brand/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-white/80">
            {statsEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-medium text-white">{statsTitle}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.caption} className="rounded-md bg-white/10 p-7 text-center">
                <div className="stat-icon mx-auto flex h-[50px] w-[50px] items-center justify-center">
                  <Icon aria-hidden="true" className="h-[50px] w-[50px] text-white" />
                </div>
                <p className="mt-4 text-[44px] font-medium leading-none tracking-[2px] text-white">
                  {stat.number}
                </p>
                <p className="mt-3 text-sm text-white/80">{stat.caption}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
