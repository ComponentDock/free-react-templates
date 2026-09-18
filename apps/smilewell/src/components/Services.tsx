import { Smile, Heart, Stethoscope, Baby, Sparkles, FileText } from 'lucide-react'

const services = [
  {
    icon: Smile,
    title: 'Tooth Extraction',
    desc: 'Safe and painless tooth extraction procedures performed by our experienced dental surgeons.',
  },
  {
    icon: Heart,
    title: 'Tooth Fillings',
    desc: 'High-quality composite fillings to restore your teeth to their natural appearance and function.',
  },
  {
    icon: Stethoscope,
    title: 'Braces Install',
    desc: 'Modern orthodontic solutions including traditional braces and clear aligners for all ages.',
  },
  {
    icon: Baby,
    title: 'Children Clinic',
    desc: 'Gentle and friendly pediatric dental care designed to make your child feel comfortable and safe.',
  },
  {
    icon: Sparkles,
    title: 'Tooth Cleaning',
    desc: 'Professional dental cleaning and polishing to maintain optimal oral hygiene and prevent decay.',
  },
  {
    icon: FileText,
    title: 'Patient Records',
    desc: 'Comprehensive digital patient records management for seamless and efficient dental care.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-smoke">
            All Kind Of Services
          </p>
          <h2 className="text-3xl font-bold text-ink">Dental Services</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-lg border border-gray-100 p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svc.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-smoke">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
