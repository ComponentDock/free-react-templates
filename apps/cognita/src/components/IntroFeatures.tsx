import { BookOpen, Library, Tag } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Learn Courses Online',
    description: 'Access hundreds of courses from expert instructors in various fields.',
  },
  {
    icon: Library,
    title: 'Online Library Store',
    description: 'Browse our extensive library of learning materials and resources.',
  },
  {
    icon: Tag,
    title: '50% off in all selected Courses',
    description: 'Take advantage of our limited-time discounts on popular courses.',
  },
]

export function IntroFeatures() {
  return (
    <section className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                <f.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-heading">{f.title}</h3>
              <p className="mt-2 text-sm text-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
