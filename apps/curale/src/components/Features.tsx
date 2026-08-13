import { Cpu, HeartHandshake, Sofa, Stethoscope, type LucideIcon } from 'lucide-react'
import { features } from '../data'

const icons: LucideIcon[] = [Cpu, Sofa, Stethoscope, HeartHandshake]

/** Four feature cards in a row: icon, h3 title, paragraph on a #f9f9fd
 *  card (5px radius) that turns white with a soft shadow on hover. */
export function Features() {
  return (
    <section className="bg-white py-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[index]!
            return (
              <div
                key={feature.title}
                className="rounded-[5px] bg-surface-alt p-10 text-center transition-all duration-500 hover:bg-white hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)]"
              >
                <Icon className="mx-auto mb-10 h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mb-4 text-[18px] font-bold uppercase text-ink">{feature.title}</h3>
                <p className="pt-3 text-[15px] leading-relaxed text-body">{feature.copy}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
