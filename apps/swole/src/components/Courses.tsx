import { COURSES } from '../data'

/**
 * Courses — "Our Popular Courses" section: centered heading with intro line
 * and a 3-card grid (photo, black title with red price span on the right,
 * description, black-outline "Apply Course" button that fills red on hover).
 */
export function Courses() {
  return (
    <section id="courses" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="text-4xl font-bold text-ink lg:text-5xl">Our Popular Courses</h2>
          <p className="mt-5 text-sm text-body">
            Structured programs for every level — from your first session to competition prep.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <article key={course.title} className="text-center">
              <img src={course.image} alt="" className="w-full object-cover" />
              <h3 className="mt-9 flex items-baseline justify-between gap-3 text-xl text-black">
                <span>{course.title}</span>
                <span className="font-display text-brand">{course.price}</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-body">{course.description}</p>
              <a
                href="#schedule"
                className="mt-10 inline-block border-2 border-black bg-transparent px-7 py-3.5 text-[15px] font-medium uppercase tracking-wide text-black transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                Apply Course
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
