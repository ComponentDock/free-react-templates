import { Brush, Droplets, Scissors, Sparkles, SprayCan, Waves } from 'lucide-react'

const features = [
  { icon: Scissors, title: 'Shave & Haircut' },
  { icon: Droplets, title: 'Cream & Shampoo' },
  { icon: Sparkles, title: 'Mustache Expert' },
  { icon: Brush, title: 'Haircut Styler' },
  { icon: SprayCan, title: 'Razor For Beards' },
  { icon: Waves, title: 'Haircomb' },
] as const

export function Features() {
  return (
    <section id="features" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">
            Barber Features
          </h2>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            We craft every cut with precision, care, and an eye for detail — from classic fades to
            full beard styling.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-400">
                Expert hands, sharp tools, and a clean finish every single time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
