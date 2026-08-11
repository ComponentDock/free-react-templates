import { Star } from 'lucide-react'
import {
  popularCourses,
  popularEyebrow,
  popularHeading,
  popularLabel,
  seeMoreLabel,
  starLabel,
} from '../data'

export function PopularCourses() {
  return (
    <section aria-label={popularLabel} className="mx-auto max-w-7xl px-4 py-24 sm:px-8">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {popularEyebrow}
        </span>
        <h2 className="mt-2 text-3xl font-bold text-heading md:text-[34px]">{popularHeading}</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {popularCourses.map((course) => (
          <article
            key={`${course.seed}-${course.title}`}
            className="flex flex-col overflow-hidden bg-card md:flex-row"
          >
            <div className="md:w-[46%]">
              <img
                src={`https://picsum.photos/seed/${course.seed}/600/350`}
                alt=""
                className="h-56 w-full object-cover md:h-[350px]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:w-[54%]">
              <h3 className="text-lg font-medium text-heading">{course.title}</h3>
              <span className="mt-1 text-xs text-accent">{course.meta}</span>
              <div
                role="img"
                aria-label={starLabel(course.rating)}
                className="mt-3 flex items-center gap-1"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="h-2.5 w-2.5"
                    fill={index < course.rating ? '#fbb710' : '#e0e3e4'}
                    stroke={index < course.rating ? '#fbb710' : '#e0e3e4'}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-heading/70">{course.blurb}</p>
              <a href="#" className="mt-5 text-sm font-semibold text-accent hover:text-brand">
                {seeMoreLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
