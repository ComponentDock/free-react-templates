import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, Users } from 'lucide-react'
import { COURSES } from '../data'

/* Popular Courses (source: div.popular_courses owl-carousel — three course
   slides; each card: thumb, absolute circular gold price badge, tag,
   title, blurb, author row + student/like meta). The carousel rotates the
   slide order with prev/next controls. */
export function PopularCourses() {
  const [index, setIndex] = useState(0)

  const visible = [...COURSES.slice(index), ...COURSES.slice(0, index)]

  const next = () => setIndex((current) => (current + 1) % COURSES.length)
  const prev = () => setIndex((current) => (current - 1 + COURSES.length) % COURSES.length)

  return (
    <section id="courses" className="bg-white pb-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mx-auto mb-16 max-w-[540px] text-center">
          <h2 className="font-heading text-[36px] font-bold text-primary">Our Popular Courses</h2>
          <p className="mt-4 text-[16px] leading-[25px] text-muted">
            Replenish man have thing gathering lights yielding shall you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <article key={course.id} className="relative">
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt=""
                  loading="lazy"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="relative bg-card p-[30px_26px]">
                {/* Circular price badge (source: span.price — 65px gold
                    circle, navy text, overlaps the image corner). */}
                <span className="absolute -top-[34px] right-[15px] flex h-[65px] w-[65px] items-center justify-center rounded-full bg-accent font-heading text-[20px] font-medium text-primary">
                  {course.price}
                </span>
                <span className="inline-block bg-white px-[21px] py-[2px] text-[13px] uppercase text-primary">
                  {course.tag}
                </span>
                <h3 className="mt-3 font-heading text-[20px] font-medium text-primary">
                  {course.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[25px] text-muted">
                  One make creepeth man bearing their one firmament won't fowl meat over sea.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.avatar}
                      alt=""
                      loading="lazy"
                      className="h-10 w-10 rounded-full"
                    />
                    <span className="text-[14px] text-muted">{course.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[14px] text-muted">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" aria-hidden="true" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4" aria-hidden="true" />
                      {course.likes}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel controls (source: owl-nav prev/next). */}
        <div className="mt-10 flex justify-center gap-3">
          <button
            type="button"
            aria-label="Previous courses"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next courses"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
