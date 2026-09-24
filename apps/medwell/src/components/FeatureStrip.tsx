import { Layers, HeartPulse, Headphones } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Primary Care',
    subtitle:
      'Comprehensive primary care services to keep you and your family healthy throughout every stage of life.',
  },
  {
    icon: HeartPulse,
    title: 'Emergency Cases',
    subtitle:
      'Round-the-clock emergency care with rapid response teams ready to handle any medical situation.',
  },
  {
    icon: Headphones,
    title: 'Online Appointment',
    subtitle:
      'Book your appointments online with ease. Our digital platform makes scheduling hassle-free.',
  },
]

export function FeatureStrip() {
  return (
    <section className="relative bg-cover bg-center py-12" style={{ backgroundColor: '#f0f4ff' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-none bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <f.icon className="mt-1 h-8 w-8 shrink-0 text-brand-500" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-heading">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
