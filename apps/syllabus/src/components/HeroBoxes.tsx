import { Globe, BookOpen, GraduationCap } from 'lucide-react'

const boxes = [
  {
    title: 'Online Courses',
    icon: Globe,
    description: 'Learn from anywhere with our comprehensive online courses.',
  },
  {
    title: 'Our Library',
    icon: BookOpen,
    description: 'Access thousands of books and educational resources.',
  },
  {
    title: 'Our Teachers',
    icon: GraduationCap,
    description: 'Expert instructors guiding you to success.',
  },
]

export function HeroBoxes() {
  return (
    <section className="relative z-20 -mt-16 px-4" aria-label="Hero information boxes">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {boxes.map((box) => {
          const Icon = box.icon
          return (
            <div
              key={box.title}
              className="flex flex-col items-center rounded-lg bg-surface p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <Icon className="mb-4 h-12 w-12 text-brand" aria-hidden="true" />
              <h2 className="mb-2 font-heading text-xl font-bold text-ink">{box.title}</h2>
              <p className="mb-4 text-sm text-body">{box.description}</p>
              <a
                href="#"
                className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                view more
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
