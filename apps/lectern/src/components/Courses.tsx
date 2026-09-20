import { BookOpen } from 'lucide-react'

const courses = [
  {
    title: 'Certificate Course in Writing for a Global Market',
    price: '100',
  },
  {
    title: 'Google AdWords: Get More Customers with Search Marketing',
    price: '150',
  },
  {
    title: 'The Ultimate Drawing Course — Beginner to Advanced',
    price: '180',
  },
  {
    title: 'Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
    price: '150',
  },
  {
    title: 'Web Developer Bootcamp — Build Web Applications',
    price: '250',
  },
] as const

export function Courses() {
  return (
    <section id="courses" aria-label="Courses" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            Our Courses
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <BookOpen className="mb-4 h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mb-4 flex-1 text-base font-bold leading-snug text-ink dark:text-white">
                {course.title}
              </h3>
              <p className="text-2xl font-bold text-brand">
                ${course.price}
                <span className="text-sm font-normal text-body">/month</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
