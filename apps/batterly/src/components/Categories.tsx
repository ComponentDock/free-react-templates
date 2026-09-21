import { CATEGORIES } from '../data'

export function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group flex min-w-[120px] flex-col items-center gap-3 rounded-full border border-border bg-white px-6 py-6 transition-all hover:bg-brand hover:border-brand cursor-pointer"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-2xl transition-colors group-hover:bg-white/20">
                {cat.icon}
              </span>
              <span className="text-sm font-medium text-ink transition-colors group-hover:text-white">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
