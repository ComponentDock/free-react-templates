import { ArrowRight } from 'lucide-react'
import { teachers } from '../data'

/** Light-background "Our Best Teachers" section — four faculty cards (photo,
 *  name, role) plus a "View All Faculty" button. */
export function Faculty() {
  return (
    <section id="instructors" aria-label="Faculty" className="bg-lilac py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            More About Our Faculty
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-title dark:text-white">
            Our Best Teachers
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <img
                src={teacher.image}
                alt={`Portrait of ${teacher.name}`}
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-title dark:text-white">
                  {teacher.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand">
                  {teacher.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#instructors"
            className="inline-flex items-center gap-2 bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-sweep"
          >
            View All Faculty
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
