import type { CSSProperties } from 'react'
import { ArrowRight, Award, Clock, Play } from 'lucide-react'
import { progressOf, type Course } from '../data/courses'

/**
 * The striped fill. A white-25 % 90° gradient tiled at 16 px yields the
 * reference's 8 px period (4 px white, 4 px clear) over the card's accent.
 */
const STRIPES: CSSProperties = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255,255,255,.25) 25%, transparent 25% 50%, rgba(255,255,255,.25) 50% 75%, transparent 75%)',
  backgroundSize: '16px 16px',
}

interface CourseCardProps {
  course: Course
}

/**
 * One course card: a 16:9 thumbnail with a level chip, the body report
 * (track, title, instructor, two meta facts, striped progress bar) and the
 * tinted strip pinned to the card's bottom edge by the body's `flex-1`.
 */
export function CourseCard({ course }: CourseCardProps) {
  const progress = progressOf(course)
  const tokens = { '--accent': course.accent, '--soft': course.soft } as CSSProperties

  return (
    <article
      id={course.id}
      style={tokens}
      className="group relative flex flex-col rounded-[22px] border border-[#e6e8f0] bg-white p-2.5 text-[14.5px] leading-[1.5] text-[#161a2e] transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-26px_rgba(22,26,46,.45)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[var(--soft)]">
        <img
          src={course.image}
          alt={course.alt}
          width={700}
          height={440}
          loading={course.loading}
          decoding="async"
          className="block h-full w-full object-cover"
        />
        <span className="absolute bottom-2.5 left-2.5 rounded-lg bg-[rgba(255,255,255,.94)] px-2.5 py-1 text-xs font-semibold text-[#161a2e]">
          {course.level}
        </span>
      </div>

      <div className="flex-1 px-3 pt-4 pb-1">
        <p className="m-0 text-[13px] font-semibold text-[var(--accent)]">{course.track}</p>
        <h2 className="mt-1 mr-0 mb-3 ml-0 text-[18px] leading-[1.3] font-semibold tracking-[-.01em]">
          <a
            href={`#${course.id}`}
            className="coursebook-card-link text-inherit no-underline after:absolute after:inset-0 after:z-[1] after:rounded-[22px]"
          >
            {course.title}
          </a>
        </h2>

        <p className="mt-0 mr-0 mb-3 ml-0 flex items-center gap-2 font-medium">
          <span
            aria-hidden="true"
            className="grid size-7 flex-none place-items-center rounded-full bg-[var(--soft)] text-[11px] font-bold text-[var(--accent)]"
          >
            {course.instructor.initials}
          </span>
          {course.instructor.name}
        </p>

        <ul className="mt-0 mr-0 mb-4 ml-0 flex list-none flex-wrap gap-4 p-0 text-[13.5px] text-[#4b5168]">
          <li className="inline-flex items-center gap-1.5">
            <Play aria-hidden="true" size={17} strokeWidth={1.8} className="flex-none" />
            {course.lessons} lessons
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Clock aria-hidden="true" size={17} strokeWidth={1.8} className="flex-none" />
            {course.duration}
          </li>
        </ul>

        <div>
          <div className="mb-1.5 flex justify-between gap-2 text-[13px] text-[#4b5168]">
            <span>{progress.label}</span>
            <strong className="font-semibold text-[#161a2e]">{progress.figure}</strong>
          </div>
          <div
            role="progressbar"
            aria-label={`Progress on ${course.title}`}
            aria-valuenow={progress.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 overflow-hidden rounded-full bg-[var(--soft)]"
          >
            <span
              className="block h-full rounded-[inherit] bg-[var(--accent)]"
              style={{ ...STRIPES, width: `${progress.percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2.5 rounded-[14px] bg-[var(--soft)] px-3.5 py-3 text-[13px] text-[#4b5168]">
        <span className="inline-flex min-w-0 items-center gap-1.5">
          {progress.done ? (
            <>
              <Award
                aria-hidden="true"
                size={18}
                strokeWidth={2}
                className="coursebook-award flex-none text-[var(--accent)]"
              />
              <strong className="font-semibold text-[#161a2e]">Certificate ready</strong>
            </>
          ) : (
            <>
              <span>Next:</span>
              <strong className="font-semibold text-[#161a2e]">{course.nextLesson}</strong>
            </>
          )}
        </span>
        <span
          aria-hidden="true"
          className="inline-flex flex-none items-center gap-1 rounded-[10px] bg-[var(--accent)] px-3 py-[7px] font-semibold text-white transition-[gap] duration-200 group-hover:gap-2 motion-reduce:transition-none"
        >
          {progress.cta}
          <ArrowRight aria-hidden="true" size={16} strokeWidth={2.2} />
        </span>
      </div>
    </article>
  )
}
