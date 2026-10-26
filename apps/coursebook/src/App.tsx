import { COURSES } from './data/courses'
import { CourseCard } from './components/CourseCard'
import { PageFooter } from './components/PageFooter'
import { PageHead } from './components/PageHead'

/**
 * Coursebook — a learning dashboard: one head line over three course cards on
 * a cool grey ground. No nav, no hero, no form and no state; the only motion is
 * CSS.
 */
export function App() {
  return (
    <main className="mx-auto max-w-[1192px] px-4 py-[clamp(32px,6vw,72px)] text-[#161a2e]">
      <PageHead />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <PageFooter />
    </main>
  )
}
