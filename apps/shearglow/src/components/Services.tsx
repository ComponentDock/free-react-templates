import { Paintbrush, Scissors, Gem, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Coloring',
    description:
      'Expert color techniques from balayage to full color transformation for a vibrant new look.',
  },
  {
    icon: Scissors,
    title: 'Haircut',
    description:
      'Precision cuts tailored to your face shape, lifestyle, and personal style preferences.',
  },
  {
    icon: Gem,
    title: 'Hairstyle',
    description:
      'Updos, braids, and styling for any occasion — from everyday elegance to special events.',
  },
  {
    icon: Sparkles,
    title: 'Treatment',
    description:
      'Deep conditioning, keratin smoothing, and restorative treatments for healthy, shiny hair.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-bold text-dark">Our Services</h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-gold-400" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-400 text-gold-400">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-dark">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
