import { ArrowRight, Star } from 'lucide-react'

const courses = [
  {
    title: 'Complete Machine Learning & AI Bootcamp',
    category: 'Data Science',
    instructor: 'Dr. Maya Chen',
    rating: '4.96',
    price: '$89.99',
    level: 'Intermediate',
    badges: ['Bestseller', 'Sale'],
    seed: 'schola-ml',
  },
  {
    title: 'Advanced UI/UX Design Masterclass',
    category: 'Design',
    instructor: 'Elena Rodriguez',
    rating: '4.94',
    price: '$79.99',
    level: 'Advanced',
    badges: ['Bestseller'],
    seed: 'schola-ux',
  },
  {
    title: 'Full-Stack React & Node.js Development',
    category: 'Software Engineering',
    instructor: 'Marcus Thompson',
    rating: '4.92',
    price: '$84.99',
    level: 'Intermediate',
    badges: ['Sale'],
    seed: 'schola-react',
  },
  {
    title: 'AWS Solutions Architect Professional',
    category: 'Cloud & DevOps',
    instructor: 'Priya Sharma',
    rating: '4.91',
    price: '$94.99',
    level: 'Advanced',
    badges: [],
    seed: 'schola-aws',
  },
  {
    title: 'Data Science with Python: Complete Guide',
    category: 'Data & Analytics',
    instructor: 'James Okonkwo',
    rating: '4.89',
    price: '$74.99',
    level: 'Beginner',
    badges: ['Sale'],
    seed: 'schola-python',
  },
] as const

export function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Hand-picked programs taught by industry experts to launch or advance your career.
            </p>
          </div>
          <a
            href="#courses"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <a
              key={course.title}
              href="#courses"
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${course.seed}/800/450`}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex gap-2">
                  {course.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold text-white shadow-lg ${
                        badge === 'Bestseller' ? 'bg-accent-500' : 'bg-red-500'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-700 backdrop-blur dark:bg-gray-900/90 dark:text-gray-300">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {course.category}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {course.instructor}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-white">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    {course.rating}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                  <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
                    {course.price}
                  </span>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    Enroll Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
