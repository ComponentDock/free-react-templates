import {
  Activity,
  Clock,
  Cog,
  FileCode,
  Megaphone,
  Monitor,
  Music,
  Network,
  Palette,
  PenTool,
  Star,
} from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { courses, sectionHeadings } from '../data'

const icons = {
  cog: Cog,
  pen: PenTool,
  network: Network,
  'file-code': FileCode,
  palette: Palette,
  megaphone: Megaphone,
  music: Music,
  monitor: Monitor,
  activity: Activity,
} as const

export function Courses() {
  return (
    <section id="courses" aria-label="Popular courses" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-base font-bold uppercase text-brand">
            {sectionHeadings.coursesSub}
          </span>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-ink lg:text-[46px] lg:leading-[1.4]">
            {sectionHeadings.coursesTitle}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = icons[course.icon as keyof typeof icons]
            return (
              <article
                key={course.title}
                className="bg-white p-8 pb-10 shadow-[0_5px_25px_-2px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Icon className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium leading-snug text-ink">{course.title}</h3>
                    <p
                      className="mt-2 flex items-center gap-1 text-brand"
                      aria-label={`Rated 5.0 out of 5`}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          data-course-star
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-1 text-sm text-muted">(5.0)</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-1 border-t border-edge/50 pt-5 text-sm text-muted">
                  <p>{course.instructor}</p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                    {course.lectures}
                  </p>
                </div>

                <p className="mt-4 font-medium text-brand">{course.price}</p>

                <ButtonLink
                  variant="outline"
                  href="#contact"
                  className="mt-6 h-auto w-full justify-center rounded border-brand py-3 text-base text-brand hover:bg-brand hover:text-white"
                >
                  Enroll Now!
                </ButtonLink>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
