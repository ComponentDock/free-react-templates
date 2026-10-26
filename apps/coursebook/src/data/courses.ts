export interface Instructor {
  readonly initials: string
  readonly name: string
}

export interface Course {
  /** In-page anchor, also the id of the card's <article>. */
  readonly id: string
  readonly image: string
  readonly alt: string
  readonly loading: 'eager' | 'lazy'
  readonly level: string
  readonly track: string
  readonly title: string
  readonly instructor: Instructor
  readonly lessons: number
  readonly duration: string
  readonly completedLessons: number
  readonly nextLesson: string
  /** Per-card pair; both are consumed as CSS custom properties on the card. */
  readonly accent: string
  readonly soft: string
}

export interface CourseProgress {
  readonly percent: number
  readonly label: string
  readonly figure: string
  readonly cta: string
  readonly done: boolean
}

export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * Three states of one card: 58 % in progress, 17 % just started and a finished
 * course. The percentage is derived from the two counts, so the printed figure
 * and the bar's width can never disagree.
 */
export const COURSES: readonly Course[] = [
  {
    id: 'course-1',
    image: 'https://picsum.photos/seed/coursebook-1/700/440',
    alt: 'A laptop on a desk showing a code editor',
    loading: 'eager',
    level: 'Intermediate',
    track: 'Front-end development',
    title: 'Modern CSS Layout with Grid and Container Queries',
    instructor: { initials: 'IM', name: 'Ines Moreau' },
    lessons: 24,
    duration: '6 h 40 min',
    completedLessons: 14,
    nextLesson: 'Subgrid for card rows',
    accent: '#4f46e5',
    soft: '#eef0ff',
  },
  {
    id: 'course-2',
    image: 'https://picsum.photos/seed/coursebook-2/700/440',
    alt: 'A laptop showing a dashboard of charts',
    loading: 'lazy',
    level: 'Beginner',
    track: 'Data',
    title: 'Spreadsheet to Dashboard: Data Analysis Basics',
    instructor: { initials: 'OB', name: 'Omar Benali' },
    lessons: 18,
    duration: '4 h 15 min',
    completedLessons: 3,
    nextLesson: 'Pivot tables in practice',
    accent: '#0f766e',
    soft: '#e6f6f3',
  },
  {
    id: 'course-3',
    image: 'https://picsum.photos/seed/coursebook-3/700/440',
    alt: 'Hands typing on a laptop keyboard',
    loading: 'lazy',
    level: 'All levels',
    track: 'Writing',
    title: 'Clear Writing for Product Teams',
    instructor: { initials: 'HW', name: 'Hannah Weiss' },
    lessons: 12,
    duration: '2 h 50 min',
    completedLessons: 12,
    nextLesson: 'Certificate ready',
    accent: '#b45309',
    soft: '#fdf3e4',
  },
]

export function progressOf(course: Course): CourseProgress {
  const percent = Math.round((course.completedLessons / course.lessons) * 100)
  const done = percent === 100

  return {
    percent,
    label: `${course.completedLessons} of ${course.lessons} lessons`,
    figure: done ? 'Completed' : `${percent}%`,
    cta: done ? 'View' : 'Resume',
    done,
  }
}
