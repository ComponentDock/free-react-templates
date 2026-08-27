import { OUTLINE_VARIANTS } from '../data'

export function OutlineButtons() {
  return (
    <section id="variants" className="bg-gray-50 py-16 px-4 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Outline Variants
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Transparent background with solid border that fills on hover.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {OUTLINE_VARIANTS.map((v) => (
            <button
              key={v.label}
              className={`inline-flex h-10 items-center justify-center rounded-lg border-2 px-4 text-sm font-medium transition-colors ${v.colorClass}`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
