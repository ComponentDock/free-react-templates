import { courses } from '../data'
import { BrandIcon } from './BrandIcon'

export function ChooseCourse() {
  return (
    <section className="site-section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase">Tutorial Courses</p>
          <h2 className="mt-2 text-[30px] font-bold text-brand">Choose Course</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {courses.map((course) => (
            <a
              key={course.name}
              href="#"
              className="block rounded-[4px] bg-light p-5 text-center text-brand transition-all hover:bg-white hover:shadow-[0_5px_10px_rgba(0,0,0,0.1)]"
            >
              <span
                className="mx-auto flex h-10 w-10 items-center justify-center"
                style={{ color: course.color }}
              >
                <BrandIcon name={course.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-3 text-lg text-[#ccc] transition-colors hover:text-black">
                {course.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
