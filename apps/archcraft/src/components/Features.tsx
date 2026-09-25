import { Building2, Compass, PaintBucket } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Innovative Structure',
    description:
      'We design buildings that stand the test of time with cutting-edge structural engineering.',
  },
  {
    icon: Compass,
    title: 'Architectural',
    description: 'Our architectural designs blend modern aesthetics with timeless principles.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description: 'Transforming spaces into inspiring environments that reflect your vision.',
  },
] as const

export function Features() {
  return (
    <section className="border-b border-line bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-mist">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
