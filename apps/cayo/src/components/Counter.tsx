import { cn } from '@free-react-templates/ui'

const stats = [
  { value: '50', label: 'Hotel Branches' },
  { value: '20000', label: 'Happy Guests' },
  { value: '100', label: 'Rooms' },
  { value: '100', label: 'Destinations' },
]

export function Counter({ className }: { className?: string }) {
  return (
    <section className={cn('relative py-24', className)}>
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/cayo-parallax/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="mb-2 font-heading text-4xl font-bold text-brand sm:text-5xl">
              {stat.value}
            </p>
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
