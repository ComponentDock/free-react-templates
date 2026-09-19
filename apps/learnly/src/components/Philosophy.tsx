import { GraduationCap, BookOpen, Library } from 'lucide-react'

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'Our Philosophy',
    description:
      'We believe every student deserves personalized attention and a learning environment that nurtures curiosity, creativity, and critical thinking.',
  },
  {
    icon: BookOpen,
    title: 'Academics Principle',
    description:
      'Our academic principles are rooted in evidence-based pedagogy, combining traditional teaching methods with innovative technology-driven approaches.',
  },
  {
    icon: Library,
    title: 'Key of Success',
    description:
      'Success comes from dedication, perseverance, and the right guidance. We provide the tools and mentorship to help every student achieve their goals.',
  },
]

export function Philosophy() {
  return (
    <section className="relative py-16 md:py-24">
      <img
        src="https://picsum.photos/seed/learnly-philo/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className="text-center">
                <Icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mb-3 text-xl font-bold text-white">{pillar.title}</h3>
                <p className="text-white/70">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
