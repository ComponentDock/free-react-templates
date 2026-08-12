import { PARTNERS } from '../data'

/* Partner strip — five grayscale partner wordmarks at 20% opacity that
   become fully opaque on hover (text placeholders, no copied assets). */

export function Partner() {
  return (
    <section id="partner-section" className="bg-white py-16 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 px-4 sm:px-6 lg:px-8">
        {PARTNERS.map((name) => (
          <span
            key={name}
            className="text-[22px] font-bold uppercase tracking-wide text-gray-500 opacity-20 grayscale transition-opacity hover:opacity-100"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
