import { Globe, Heart, Hand, Headphones } from 'lucide-react'
import { services } from '../data'

const iconMap = {
  globe: Globe,
  heart: Heart,
  hand: Hand,
  headphones: Headphones,
} as const

export function Services() {
  return (
    <section className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink">Giving light to someone</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={s.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-body">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
