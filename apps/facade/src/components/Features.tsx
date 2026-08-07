import { Award, BadgeDollarSign, PenTool, Search } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const features = [
  {
    title: 'Creative Design',
    blurb:
      'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc.',
    icon: PenTool,
  },
  {
    title: 'Experienced Style',
    blurb:
      'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc.',
    icon: Award,
  },
  {
    title: 'Product Research',
    blurb:
      'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc.',
    icon: Search,
  },
  {
    title: 'Affordable Price',
    blurb:
      'Hac facilisi ac vitae consec tetu commodo vel magna suspendisse on senectus pharetra magnfauc.',
    icon: BadgeDollarSign,
  },
] as const

export function Features() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-none border border-gray-100 bg-paper text-center shadow-sm transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="flex justify-center pt-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </span>
              </div>
              <h2 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-ink dark:text-white">
                {feature.title}
              </h2>
              <p className="mt-3 px-6 pb-8 text-sm leading-relaxed text-mist dark:text-gray-400">
                {feature.blurb}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
