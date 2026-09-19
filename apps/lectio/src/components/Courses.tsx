import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import { useState } from 'react'

interface Course {
  id: number
  title: string
  teacher: string
  role: string
  imageSeed: string
  avatarSeed: string
}

const COURSES: Course[] = [
  {
    id: 1,
    title: 'Italian for Beginners & Advanced Course',
    teacher: 'Sebastian Smith',
    role: 'Italian Teacher',
    imageSeed: 'lectio-course-1',
    avatarSeed: 'lectio-course-1a',
  },
  {
    id: 2,
    title: 'Introduction to Software Engineering',
    teacher: 'Maria Johnson',
    role: 'Software Engineer',
    imageSeed: 'lectio-course-2',
    avatarSeed: 'lectio-course-2a',
  },
  {
    id: 3,
    title: 'Business Administration Fundamentals',
    teacher: 'David Chen',
    role: 'Business Professor',
    imageSeed: 'lectio-course-3',
    avatarSeed: 'lectio-course-3a',
  },
  {
    id: 4,
    title: 'Graphic Design Masterclass',
    teacher: 'Laura Martinez',
    role: 'Design Director',
    imageSeed: 'lectio-course-4',
    avatarSeed: 'lectio-course-4a',
  },
  {
    id: 5,
    title: 'Data Science & Analytics',
    teacher: 'Robert Taylor',
    role: 'Data Scientist',
    imageSeed: 'lectio-course-5',
    avatarSeed: 'lectio-course-5a',
  },
  {
    id: 6,
    title: 'Digital Marketing Strategy',
    teacher: 'Anna Brown',
    role: 'Marketing Expert',
    imageSeed: 'lectio-course-6',
    avatarSeed: 'lectio-course-6a',
  },
]

export function Courses() {
  const [start, setStart] = useState(0)
  const visibleCount = 3
  const maxStart = Math.max(0, COURSES.length - visibleCount)

  const prev = () => setStart((s) => Math.max(0, s - 1))
  const next = () => setStart((s) => Math.min(maxStart, s + 1))

  const visible = COURSES.slice(start, start + visibleCount)

  return (
    <section className="bg-paper py-20" id="courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Our Courses</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-mist">
          Browse our wide selection of courses taught by industry professionals.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  src={`https://picsum.photos/seed/${course.imageSeed}/600/400`}
                  alt={course.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-bold text-ink">{course.title}</h3>
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={`https://picsum.photos/seed/${course.avatarSeed}/40/40`}
                      alt={`${course.teacher} avatar`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <p className="text-sm text-mist">
                      By <span className="font-semibold text-brand">{course.teacher}</span>,{' '}
                      {course.role}
                    </p>
                  </div>
                  <a
                    href="#enroll"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:from-brand-dark hover:to-primary-500"
                  >
                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                    Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={start === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-40"
              aria-label="Previous courses"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={start >= maxStart}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-40"
              aria-label="Next courses"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
