import { Clock3, PlayCircle, Star } from 'lucide-react'

const courses = [
  {
    title: 'The Complete Web Development Bootcamp 2032',
    category: 'Web Development',
    rating: '4.9',
    reviews: '18,432',
    hours: '64.5',
    lessons: '528',
    instructor: 'Sarah Johnson',
    price: '$49',
    oldPrice: '$109',
    badge: 'BESTSELLER',
    badgeClass: 'bg-red-800 text-white',
  },
  {
    title: 'Machine Learning A-Z: AI, Python & R',
    category: 'Data Science',
    rating: '4.8',
    reviews: '12,987',
    hours: '44',
    lessons: '402',
    instructor: 'Michael Chen',
    price: '$39',
    oldPrice: '$99',
    badge: '55% OFF',
    badgeClass: 'bg-rose-800 text-white',
  },
  {
    title: 'UI/UX Design: The Complete Guide',
    category: 'UI/UX Design',
    rating: '4.9',
    reviews: '9,214',
    hours: '38.5',
    lessons: '315',
    instructor: 'Emily Rodriguez',
    price: '$44',
    oldPrice: '$94',
    badge: 'BESTSELLER',
    badgeClass: 'bg-red-800 text-white',
  },
  {
    title: 'AWS Certified Solutions Architect 2032',
    category: 'Cloud & DevOps',
    rating: '4.7',
    reviews: '7,556',
    hours: '52',
    lessons: '460',
    instructor: 'David Kim',
    price: '$54',
    oldPrice: '$119',
    badge: '55% OFF',
    badgeClass: 'bg-rose-800 text-white',
  },
]

export function Courses() {
  return (
    <section id="courses" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Most Popular Courses
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Courses for every skill level
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Hand-picked by our team and loved by thousands of students.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/coursely-${courses.indexOf(course) + 1}/400/225`}
                  alt={`${course.title} thumbnail`}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-bold ${course.badgeClass}`}
                >
                  {course.badge}
                </span>
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow">
                  <PlayCircle className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {course.category}
                </p>
                <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 dark:text-white">
                  {course.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {course.rating}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                    {course.hours} hours
                  </span>
                  <span>{course.lessons} lessons</span>
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <img
                      src={`https://picsum.photos/seed/coursely-instructor-${courses.indexOf(course) + 1}/32/32`}
                      alt={`Portrait of ${course.instructor}`}
                      loading="lazy"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    {course.instructor}
                  </span>
                  <span className="text-right">
                    <span className="block text-base font-extrabold text-gray-900 dark:text-white">
                      {course.price}
                    </span>
                    <span className="block text-xs text-gray-400 line-through">
                      {course.oldPrice}
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
