import { BookOpen, Target, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Experience',
    description:
      'Years of storytelling craft distilled into every chapter. Each word is chosen with intention, each scene painted with care.',
  },
  {
    icon: Target,
    title: 'Marketing Goals',
    description:
      'Strategic positioning ensures this book reaches the readers who need it most, connecting stories with their audience.',
  },
  {
    icon: Lightbulb,
    title: 'Targeting Vision',
    description:
      'A clear vision for the future of independent publishing — empowering authors to share their stories with the world.',
  },
]

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-accent-400">
            What We Offer
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">Services</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl bg-gray-50 p-8 text-center transition-colors hover:bg-accent-400/5"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-400/10 text-accent-400 transition-colors group-hover:bg-accent-400 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
