import { Globe, IdCard, MapPin, MessageSquare, MonitorSmartphone, ThumbsUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { courses, coursesLabel } from '../data'

const courseIcons: readonly LucideIcon[] = [
  IdCard,
  Globe,
  MapPin,
  ThumbsUp,
  MonitorSmartphone,
  MessageSquare,
]

export function CoursesGrid() {
  return (
    <section aria-label={coursesLabel} className="mx-auto max-w-7xl px-4 pt-16 sm:px-8 md:pt-24">
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => {
          // Index is bounded by the courses array — no fallback needed.
          const Icon = courseIcons[index] as LucideIcon
          return (
            <article key={course.seed} className="flex items-start gap-8">
              <span className="flex h-[91px] w-[91px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-2 text-white">
                <Icon aria-hidden="true" className="h-10 w-10" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-heading transition-colors hover:text-accent">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-heading/70">{course.blurb}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
