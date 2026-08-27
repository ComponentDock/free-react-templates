import { SOLID_VARIANTS } from '../data'

export function SolidButtons() {
  return (
    <section id="showcase" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Solid Variants
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Standard solid buttons across all semantic color intents.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {SOLID_VARIANTS.map((v) => (
            <button
              key={v.label}
              className={`inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors ${v.colorClass}`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
