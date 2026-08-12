import { useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { COURSES, COURSE_TABS } from '../data'

/* Popular Courses (source: div.popular_courses — section title, tab bar of
   nine categories, course card grid filtered per tab, teal outline "More
   Courses" pill). "All Courses" shows the first six cards; each category
   tab shows its own cards. */
const ALL_TAB = 'All Courses'

export function PopularCourses() {
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB)

  const visibleCourses =
    activeTab === ALL_TAB ? COURSES.slice(0, 6) : COURSES.filter((c) => c.category === activeTab)

  return (
    <section id="courses" className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-16 text-center">
          <h2 className="text-[46px] font-normal text-ink">Popular Courses</h2>
          <p className="mx-auto mt-4 max-w-[560px] font-serif text-[17px] text-smoke">
            Your domain control panel is designed for ease-of-use and allows for all aspects of your
            domains.
          </p>
        </div>

        {/* Category tabs (source: ul.nav course_nav). */}
        <ul className="mb-12 flex flex-wrap justify-center gap-2">
          {COURSE_TABS.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-current={activeTab === tab ? 'true' : undefined}
                className={cn(
                  'relative px-4 py-2 text-[16px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand',
                  activeTab === tab ? 'text-ink' : 'text-smoke hover:text-ink',
                )}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>

        {/* Course grid (source: tab panes of .single_courses cards). */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <article key={course.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt=""
                  loading="lazy"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[13px] font-medium uppercase tracking-wide text-smoke">
                  {course.category}
                </p>
                <h3 className="mt-2 min-h-[54px] text-[18px] font-medium leading-7 text-ink">
                  {course.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-sun text-sun" aria-hidden="true" />
                    <span className="text-[14px] text-smoke">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-smoke line-through">{course.offer}</span>
                    <span className="text-[18px] font-semibold text-brand">{course.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#courses"
            className="inline-block rounded-[30px] border border-brand px-[50px] py-[17px] text-[16px] font-medium text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Courses
          </a>
        </div>
      </div>
    </section>
  )
}
