import { Play } from 'lucide-react'

const stats = [
  { value: '8+', label: 'Year of Experience' },
  { value: '15+', label: 'Expert Doctors' },
  { value: '320+', label: 'Health Sections' },
  { value: '1500+', label: 'Happy Smiles' },
] as const

export function AboutStats() {
  return (
    <section id="about-us" className="bg-gradient-to-r from-gradient-start to-gradient-end py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex justify-center">
          <button
            type="button"
            aria-label="Play video"
            className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/60 text-white transition-colors hover:bg-white/20"
          >
            <Play className="ml-1 h-8 w-8" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-1 text-4xl font-bold text-white md:text-5xl">{stat.value}</p>
              <p className="text-sm font-medium text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
