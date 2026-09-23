import { ButtonLink } from '@free-react-templates/ui'

const courses = [
  {
    title: 'Breakthrough Thinking',
    price: 25,
    image: 'https://picsum.photos/seed/liber-course1/400/250',
  },
  {
    title: 'Creative Writing 101',
    price: 30,
    image: 'https://picsum.photos/seed/liber-course2/400/250',
  },
  {
    title: 'Storytelling Mastery',
    price: 35,
    image: 'https://picsum.photos/seed/liber-course3/400/250',
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
            Top Courses That Are Open for Students
          </h2>
          <p className="mt-4 text-mist">Learn the craft from an award-winning author.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
                  For Sale
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">{course.title}</h3>
                  <span className="text-lg font-bold text-brand">${course.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Learn essential techniques and strategies from real-world experience in this
                  comprehensive course.
                </p>
                <ButtonLink href="#" variant="outline" className="mt-4 w-full rounded-sm text-sm">
                  View Course
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
