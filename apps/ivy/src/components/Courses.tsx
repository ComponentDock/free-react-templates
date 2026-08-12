import { CalendarDays, Table, User } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { COURSE_META_SEATS, COURSE_META_TEACHER, COURSE_META_YEARS, COURSES } from '../data'

/**
 * Courses — centered "Our Courses" heading followed by four white
 * radius-xl course cards with a photo, an orange-icon meta row, a title
 * and an orange "Apply now" button.
 */
export function Courses() {
  return (
    <section id="courses-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Our Courses</h2>
          <p className="mt-4 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COURSES.map((course) => (
            <article key={course.image} className="overflow-hidden rounded-xl bg-white shadow-md">
              <img src={course.image} alt="" aria-hidden="true" className="w-full" loading="lazy" />
              <div className="p-5">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {COURSE_META_TEACHER}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Table className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {COURSE_META_SEATS}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {COURSE_META_YEARS}
                  </span>
                </p>
                <h3 className="mt-3 text-lg font-semibold text-navy transition-colors hover:text-primary">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{course.blurb}</p>
                <ButtonLink
                  href="#admissions-section"
                  className="mt-4 rounded-xl border-2 border-primary bg-primary px-4 py-2 text-sm text-white hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_4px_14px_rgba(253,95,0,0.25)]"
                >
                  Apply now
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
