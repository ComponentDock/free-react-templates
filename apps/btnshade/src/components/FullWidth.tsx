export function FullWidth() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white text-center">
          Full width button
        </h2>
        <button
          type="button"
          className="w-full rounded-full bg-primary px-5 py-2.5 text-base font-medium text-white transition-colors duration-150 hover:bg-primary-hover"
        >
          Full width button
        </button>
      </div>
    </section>
  )
}
