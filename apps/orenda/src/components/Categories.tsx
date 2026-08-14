import { ArrowRight } from 'lucide-react'
import { categories } from '../data'

/** "Let's Browse All Categories" — 4–5 category cards (icon, title, copy,
 *  Read More) that fill indigo with white text on hover. */
export function Categories() {
  return (
    <section
      id="categories"
      aria-label="Course categories"
      className="bg-white py-20 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Browse Courses
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-title dark:text-white">
            Let&apos;s Browse All Categories
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.href}
              data-testid={`category-card-${index}`}
              className="group border border-gray-200 bg-soft p-8 transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white dark:border-gray-800 dark:bg-gray-900"
            >
              <category.icon
                aria-hidden="true"
                className="h-10 w-10 text-brand transition-colors group-hover:text-white"
              />
              <h3 className="mt-5 font-display text-xl font-semibold text-title transition-colors group-hover:text-white dark:text-white">
                {category.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/85 dark:text-gray-300">
                {category.copy}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-white">
                Read More
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
