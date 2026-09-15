import { Play } from 'lucide-react'

const stats = [
  { value: '500', label: 'Qualified Lawyers' },
  { value: '2000', label: 'Trusted Clients' },
  { value: '1500', label: 'Successful Cases' },
  { value: '100', label: 'Honors & Awards' },
] as const

export function StatsCounter() {
  return (
    <section id="stats" aria-label="Statistics" className="bg-[#1d2124] py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center">
          <div className="group relative flex h-64 w-full max-w-md cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#343a40]">
            <img
              src="https://picsum.photos/seed/counsel-stats/560/360"
              alt="Law firm video placeholder"
              className="h-full w-full object-cover opacity-60"
              loading="lazy"
            />
            <span className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-white">
            Counsel Law Firm Established Since 1990
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-md bg-[#343a40] p-6 text-center">
                <p className="font-display text-3xl font-bold text-primary-500">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
