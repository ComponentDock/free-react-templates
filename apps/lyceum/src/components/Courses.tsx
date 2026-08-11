import { MessageCircle, User, Users } from 'lucide-react'
import {
  courses,
  coursesHeading,
  coursesLabel,
  coursesParagraph,
  freeBadgeLabel,
  type Course,
} from '../data'
import { cn } from '@free-react-templates/ui'

function CourseCard({ course, tall }: { course: Course; tall?: boolean }) {
  const width = tall ? 420 : 640
  const height = tall ? 600 : 420
  return (
    <article className="group relative overflow-hidden bg-ink">
      <img
        src={`https://picsum.photos/seed/${course.seed}/${width}/${height}`}
        alt=""
        className={cn('w-full object-cover', tall && 'h-full')}
      />
      <div className="absolute inset-x-0 bottom-[15px] px-[35px]">
        <span className="mb-5 inline-block bg-brand px-[25px] text-sm font-medium leading-[30px] text-white">
          {freeBadgeLabel}
        </span>
        <h3 className="mb-[15px] text-lg text-white transition-colors group-hover:text-brand">
          {course.title}
        </h3>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white">
          <li className="flex items-center gap-1">
            <Users aria-hidden="true" className="h-4 w-4" />
            {course.students}
          </li>
          <li className="flex items-center gap-1">
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            {course.reviews}
          </li>
          <li className="flex items-center gap-1">
            <User aria-hidden="true" className="h-4 w-4" />
            {course.instructor}
          </li>
        </ul>
      </div>
    </article>
  )
}

export function Courses() {
  const gridCourses = courses.filter((course) => !course.sidebar)
  const sidebarCourse = courses.find((course) => course.sidebar)!

  return (
    <section aria-label={coursesLabel} className="overflow-hidden py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-[75px] max-w-[680px] text-center">
          <h2 className="mb-3 font-heading text-4xl text-ink">{coursesHeading}</h2>
          <p className="text-sm leading-6 text-muted">{coursesParagraph}</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-wrap gap-8 lg:w-3/4">
            {gridCourses.map((course, index) => (
              <div
                key={course.title}
                className={cn(
                  'w-full',
                  index % 2 === 0 ? 'lg:w-[calc(55.55%-16px)]' : 'lg:w-[calc(44.45%-16px)]',
                )}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/4">
            <CourseCard course={sidebarCourse} tall />
          </div>
        </div>
      </div>
    </section>
  )
}
