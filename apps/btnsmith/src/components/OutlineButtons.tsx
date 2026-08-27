export function OutlineButtons() {
  return (
    <section id="outline" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            2. Outline & Border Buttons
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Clean border-styled buttons with hover background fills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <button
            type="button"
            className="rounded-lg border-2 border-[#007bff] px-6 py-3 text-sm font-semibold text-[#007bff] transition-colors hover:bg-[#007bff] hover:text-white"
          >
            Primary Outline
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-[#6c757d] px-6 py-3 text-sm font-semibold text-[#6c757d] transition-colors hover:bg-[#6c757d] hover:text-white"
          >
            Secondary Outline
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-[#e2c275] px-6 py-3 text-sm font-semibold text-[#d9af4b] transition-colors hover:bg-[#e2c275] hover:text-gray-900"
          >
            Tertiary Outline
          </button>
          <button
            type="button"
            className="rounded-lg border-2 border-[#b96b9f] px-6 py-3 text-sm font-semibold text-[#b96b9f] transition-colors hover:bg-[#b96b9f] hover:text-white"
          >
            Quaternary Outline
          </button>
        </div>
      </div>
    </section>
  )
}
