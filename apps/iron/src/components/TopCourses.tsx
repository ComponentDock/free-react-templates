import { cn } from '@free-react-templates/ui'

const courses = [
  { title: 'Running Classes', price: 275, image: 'iron-course-1' },
  { title: 'Weight Lifting Classes', price: 200, image: 'iron-course-2' },
  { title: 'Body Combat Classes', price: 225, image: 'iron-course-3' },
  { title: 'Organic Yoga Classes', price: 300, image: 'iron-course-4' },
  { title: 'Raw Fitness Classes', price: 500, image: 'iron-course-5' },
  { title: 'Body Building Classes', price: 250, image: 'iron-course-6' },
] as const

export function TopCourses() {
  return (
    <section id="courses" aria-label="Top courses" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          Top Courses That are open for Students
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className={cn(
                'group overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-lg',
              )}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${course.image}/400/300`}
                  alt={course.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded bg-primary-400 px-3 py-1 text-xs font-semibold uppercase text-white">
                  Course Available
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{course.title}</h3>
                <p className="mt-2 text-sm font-medium text-primary-400">${course.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
