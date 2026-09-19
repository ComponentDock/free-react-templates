import { GraduationCap, BookOpen, Library } from 'lucide-react'

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Personalize Learning',
    description:
      'Our adaptive learning platform tailors courses to your individual pace and style, ensuring maximum engagement and retention.',
  },
  {
    icon: BookOpen,
    title: 'Trusted Courses',
    description:
      'All courses are designed by industry experts and reviewed by academic professionals to guarantee quality education.',
  },
  {
    icon: Library,
    title: 'Tools for Students',
    description:
      'Access a comprehensive suite of study tools including digital libraries, practice exams, and collaborative workspaces.',
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">Why Learnly Works</h2>
          <div className="mx-auto h-1 w-20 bg-brand" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand">
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mb-4 text-mist">{feature.description}</p>
                <a
                  href="#"
                  className="inline-block rounded-none bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
