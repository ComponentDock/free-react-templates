import { Trophy, Star, Award } from 'lucide-react'

const awards = [
  {
    icon: Trophy,
    label: 'Best Fine Dining 2024',
    description: 'Awarded by the National Restaurant Association',
  },
  {
    icon: Star,
    label: 'Michelin Recommended',
    description: 'Recognized for outstanding culinary excellence',
  },
  { icon: Award, label: 'Chef of the Year', description: 'Our head chef honored for innovation' },
]

export function Awards() {
  return (
    <section id="awards" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-center text-3xl font-bold uppercase tracking-wide text-black">
          Awards
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {awards.map((award) => {
            const Icon = award.icon
            return (
              <div
                key={award.label}
                className="flex flex-col items-center gap-4 rounded border border-gray-200 p-8 text-center"
              >
                <Icon className="h-12 w-12 text-brand-red" />
                <h3 className="font-heading text-lg font-semibold text-black">{award.label}</h3>
                <p className="text-sm text-gray-500">{award.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
