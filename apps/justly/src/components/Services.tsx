import { Dumbbell, Flame, Heart } from 'lucide-react'

const services = [
  {
    title: 'Body Building',
    description:
      'Structured hypertrophy programs with progressive overload to build lean muscle mass and strength.',
    icon: Dumbbell,
  },
  {
    title: 'Muscle Gain',
    description:
      'Targeted muscle-building routines focusing on compound movements and nutrition guidance.',
    icon: Flame,
  },
  {
    title: 'Weight Loss',
    description:
      'Sustainable fat-loss plans combining metabolic conditioning with dietary strategies.',
    icon: Heart,
  },
]

export function Services() {
  return (
    <section id="courses" className="bg-surface-light py-20" data-testid="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-white text-center uppercase mb-12">
          What I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-brand/10">
                <s.icon className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-heading text-xl text-white uppercase mb-3">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
