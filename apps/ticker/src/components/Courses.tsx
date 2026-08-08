import { ArrowRight, Play, Star } from 'lucide-react'

const courses = [
  {
    title: 'Crypto Trading Masterclass: From Zero to Hero',
    instructor: 'Alex Krieger',
    level: 'Beginner',
    rating: '4.9',
    students: '18,500 students',
    price: '$67',
    image: 'https://picsum.photos/seed/ticker-1/800/450',
  },
  {
    title: 'Day Trading Stocks: The Complete System',
    instructor: 'Marcus Williams',
    level: 'Intermediate',
    rating: '4.8',
    students: '12,300 students',
    price: '$79',
    image: 'https://picsum.photos/seed/ticker-2/800/450',
  },
  {
    title: 'Options Trading: The Wheel Strategy',
    instructor: 'Sarah Chen',
    level: 'Intermediate',
    rating: '4.9',
    students: '9,800 students',
    price: '$79',
    image: 'https://picsum.photos/seed/ticker-3/800/450',
  },
  {
    title: 'Algorithmic Trading with Python',
    instructor: 'Elena Kowalski',
    level: 'Advanced',
    rating: '4.7',
    students: '7,400 students',
    price: '$99',
    image: 'https://picsum.photos/seed/ticker-4/800/450',
  },
  {
    title: 'Technical Analysis: Complete Price Action',
    instructor: 'Alex Krieger',
    level: 'All levels',
    rating: '4.8',
    students: '15,900 students',
    price: '$67',
    image: 'https://picsum.photos/seed/ticker-5/800/450',
  },
] as const

export function Courses() {
  return (
    <section id="courses" className="bg-gray-50 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Master the Markets
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Structured courses taught by professional traders who have generated millions in
            verified profits.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-colors hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={`${course.title} thumbnail`}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur dark:bg-gray-950/80 dark:text-white">
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                  {course.level}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {course.instructor} · {course.students}
                </p>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                    {course.rating}/5
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                  <span className="font-display text-xl font-bold text-gray-900 dark:text-white">
                    {course.price}
                  </span>
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-500 dark:text-primary-400"
                  >
                    Enroll
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
