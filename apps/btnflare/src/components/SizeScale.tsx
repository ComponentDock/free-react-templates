export function SizeScale() {
  const sizes = [
    { label: 'Large', className: 'px-8 py-4 text-lg' },
    { label: 'Medium', className: 'px-5 py-2.5 text-base' },
    { label: 'Small', className: 'px-3 py-1.5 text-sm' },
  ] as const

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white text-center">
          Size Scale
        </h2>
        <div className="flex flex-col items-center gap-8">
          {sizes.map(({ label, className }) => (
            <div key={label} className="flex flex-col items-center gap-3 w-full">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {label}
              </span>
              <button
                type="button"
                className={`rounded-full bg-primary text-white font-medium transition-colors duration-150 hover:bg-primary-hover ${className}`}
              >
                Button
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
