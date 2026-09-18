import { Smile, Sparkles, Shield, Stethoscope, Cross, SmilePlus } from 'lucide-react'

const features = [
  {
    icon: Smile,
    title: 'Periodontology',
    description: 'Expert gum disease treatment and periodontal care for healthier gums.',
  },
  {
    icon: Sparkles,
    title: 'Tooth Whitening',
    description: 'Professional whitening treatments to brighten your smile safely.',
  },
  {
    icon: Shield,
    title: 'Preventative Care',
    description: 'Regular check-ups and cleanings to prevent dental issues before they start.',
  },
  {
    icon: Stethoscope,
    title: 'General Checkup',
    description: 'Comprehensive oral examinations and personalized health assessments.',
  },
  {
    icon: Cross,
    title: 'First Aid Treatment',
    description: 'Emergency dental care and urgent treatment when you need it most.',
  },
  {
    icon: SmilePlus,
    title: 'Tooth Alignment',
    description: 'Orthodontic solutions including braces and aligners for straighter teeth.',
  },
] as const

export function Features() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex rounded-md border border-gray-100 bg-gray-50 p-6 transition-shadow hover:shadow-md"
            >
              <feature.icon
                className="mr-4 h-10 w-10 shrink-0 text-primary-400"
                aria-hidden="true"
              />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-ink">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
