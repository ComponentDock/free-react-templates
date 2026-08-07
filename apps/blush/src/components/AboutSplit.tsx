import { Heart, Rocket, Shield, Smartphone } from 'lucide-react'

const features = [
  { label: 'Fast Setup', icon: Rocket },
  { label: 'Secure', icon: Shield },
  { label: 'Smart Sync', icon: Smartphone },
  { label: 'Lovable Design', icon: Heart },
] as const

export function AboutSplit() {
  return (
    <section id="about" aria-label="About the app" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={`https://picsum.photos/seed/blush-slide-${n}/360/420`}
              alt={`Blush app screen ${n}`}
              className="h-auto w-full rounded-2xl shadow-lg"
              loading="lazy"
            />
          ))}
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Mobile ready
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper
            rhoncus. Curabitur pulvinar vel augue sit amet vestibulum. Proin tempus lacus porta,
            imperdiet odio in, gravida risus.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100/40 text-primary-400">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-ink dark:text-gray-200">{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
