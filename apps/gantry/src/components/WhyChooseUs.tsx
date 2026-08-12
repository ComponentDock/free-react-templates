import { Building2, PenTool, Compass, type LucideIcon } from 'lucide-react'
import { WHY_CHOOSE_FEATURES, type Feature } from '../data'

/* Feature icon map — one lucide icon per data key. */
const FEATURE_ICONS: Record<Feature['icon'], LucideIcon> = {
  Building2,
  PenTool,
  Compass,
}

/* WhyChooseUs — the dark-navy #09162a split section: photo on the left
   (overlapping the services section above) and, on the right, the orange
   subtitle, the "More than 50 year experience in industry" heading, a
   paragraph and three orange-icon feature rows. */
export function WhyChooseUs() {
  return (
    <section aria-label="Why Choose Us" className="bg-navy py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:-mt-32">
            <img
              src="https://picsum.photos/seed/gantry-about-1/720/620"
              alt="Engineers reviewing blueprints on a construction site"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-heading text-xl font-light uppercase tracking-[0.2em] text-brand">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-heading text-4xl font-light text-white lg:text-5xl">
              More than 50 year experience in industry
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              From the first sketch to the final inspection, our engineers and site crews bring
              decades of hands-on experience to every project we take on.
            </p>
            <ul className="mt-10 space-y-8">
              {WHY_CHOOSE_FEATURES.map((feature) => {
                const Icon = FEATURE_ICONS[feature.icon]
                return (
                  <li key={feature.heading} className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 text-brand">
                      <Icon size={36} aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="font-heading text-lg font-normal text-white">
                        {feature.heading}
                      </h4>
                      <p className="mt-1 text-[15px] leading-6 text-white/70">{feature.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
