export function ShapeVariants() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Pill &amp; Square Radii
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Buttons with rounded-full pill shape and sharp-edged square shape.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Pill Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Primary', 'Secondary', 'Success', 'Danger'].map((label) => (
                <button
                  key={`pill-${label}`}
                  className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium text-white transition-colors ${
                    label === 'Primary'
                      ? 'bg-primary hover:bg-primary-hover'
                      : label === 'Secondary'
                        ? 'bg-secondary hover:bg-secondary-hover'
                        : label === 'Success'
                          ? 'bg-success hover:bg-success-hover'
                          : 'bg-danger hover:bg-danger-hover'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Square Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Primary', 'Secondary', 'Success', 'Danger'].map((label) => (
                <button
                  key={`square-${label}`}
                  className={`inline-flex h-10 items-center justify-center rounded-none px-5 text-sm font-medium text-white transition-colors ${
                    label === 'Primary'
                      ? 'bg-primary hover:bg-primary-hover'
                      : label === 'Secondary'
                        ? 'bg-secondary hover:bg-secondary-hover'
                        : label === 'Success'
                          ? 'bg-success hover:bg-success-hover'
                          : 'bg-danger hover:bg-danger-hover'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
