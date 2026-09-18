import { Banknote, Shield, Car, Users, Trophy } from 'lucide-react'
import { features } from '../data'

const iconList = [Banknote, Shield, Car, Users, Trophy]

/** Features section with icon boxes. */
export function Features() {
  return (
    <section className="bg-light-bg py-20" data-testid="features">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">Features</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((item, i) => {
            const Icon = iconList[i]!
            return (
              <div key={item.title} className="rounded-lg bg-white p-6 text-center shadow-sm">
                <Icon size={36} className="mx-auto mb-4 text-brand" aria-hidden="true" />
                <h5 className="mb-2 text-sm font-bold uppercase text-navy">{item.title}</h5>
                <p className="text-xs leading-relaxed text-body">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
