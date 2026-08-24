import { BookOpen, Award, Users, FolderOpen } from 'lucide-react'

const STATS = [
  { icon: Users, value: '3,000', label: 'Happy Readers' },
  { icon: Award, value: '15', label: 'Awards Won' },
  { icon: BookOpen, value: '8', label: 'Books Written' },
  { icon: FolderOpen, value: '42', label: 'Projects Done' },
]

/**
 * Statistics counter section with parallax background and 4 stat items.
 * Matches the original Mellisa counter section pattern.
 */
export function StatsCounter() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 dark:bg-gray-950">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/folio-stats/1920/600')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
            Great reviews for our services
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Technical Statistics
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <Icon size={32} className="mx-auto mb-3 text-brand" aria-hidden="true" />
                <p className="font-heading text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/70">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
