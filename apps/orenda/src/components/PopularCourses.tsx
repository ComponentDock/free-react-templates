import { ArrowRight, Star } from 'lucide-react'
import { courses } from '../data'

/** "Most Popular Course of This Week" — three course cards (image, category
 *  tag, review count, price) plus a square indigo "Find More Courses" CTA. */
export function PopularCourses() {
  return (
    <section id="courses" aria-label="Popular courses" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our Popular Course
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-title dark:text-white">
            Most Popular Course of This Week
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.title}
              href={course.href}
              className="group border border-gray-200 bg-soft transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={`${course.title} course`}
                  className="h-52 w-full object-cover"
                />
                <span className="absolute left-4 top-4 bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {course.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
                    <Star aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {course.reviews}
                  </span>
                  <span className="font-semibold text-check">{course.price}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-title transition-colors group-hover:text-brand dark:text-white">
                  {course.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#courses"
            className="inline-flex items-center gap-2 bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sweep"
          >
            Find More Courses
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
