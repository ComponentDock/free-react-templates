import { Clock, User } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Course {
  title: string
  image: string
  date: string
  duration: string
  instructor: string
}

const courses: Course[] = [
  {
    title: '100 Hour Yoga Course',
    image: 'https://picsum.photos/seed/yoga-class1/600/400',
    date: 'Oct 15 — Nov 15, 2026',
    duration: '4 Weeks',
    instructor: 'Sarah Johnson',
  },
  {
    title: '200 Hour Yoga Course',
    image: 'https://picsum.photos/seed/yoga-class2/600/400',
    date: 'Jan 5 — Mar 5, 2027',
    duration: '8 Weeks',
    instructor: 'David Miller',
  },
  {
    title: '300 Hour Yoga Course',
    image: 'https://picsum.photos/seed/yoga-class3/600/400',
    date: 'Apr 10 — Jul 10, 2027',
    duration: '12 Weeks',
    instructor: 'Emily Chen',
  },
]

interface ClassesProps {
  className?: string
}

export function Classes({ className }: ClassesProps) {
  return (
    <section id="classes" className={cn('bg-light-bg py-20', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-brand">
          Our Classes
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-heading">Upcoming Yoga Courses</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-semibold text-heading">{course.title}</h3>
                <div className="mt-3 flex flex-col gap-2 text-xs text-text">
                  <span>{course.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" aria-hidden="true" />
                    {course.instructor}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="mt-4 inline-block rounded bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
