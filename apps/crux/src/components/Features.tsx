import { Palette, Shield, Headphones, Zap } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Unlimited Colors',
    description:
      'Craft stunning visuals with an infinite palette. Our design tools let you match any brand identity effortlessly.',
  },
  {
    icon: Shield,
    title: 'Smart Security',
    description:
      'Enterprise-grade protection built in from day one. Keep your data and your users safe without extra configuration.',
  },
  {
    icon: Headphones,
    title: 'Endless Support',
    description:
      'Our dedicated team is available around the clock. Get answers fast and keep your projects moving forward.',
  },
  {
    icon: Zap,
    title: 'Reliable Design',
    description:
      'Pixel-perfect layouts that perform on every device. Consistent experiences your users will trust.',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-50 text-brand">
                <f.icon size={28} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
