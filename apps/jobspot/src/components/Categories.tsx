import {
  Code,
  GraduationCap,
  Palette,
  Calculator,
  UtensilsCrossed,
  Stethoscope,
  BookOpen,
} from 'lucide-react'

const categories = [
  { icon: Code, name: 'Website & Software', count: 143 },
  { icon: GraduationCap, name: 'Education & Training', count: 300 },
  { icon: Palette, name: 'Graphic & UI/UX Design', count: 143 },
  { icon: Calculator, name: 'Accounting & Finance', count: 143 },
  { icon: UtensilsCrossed, name: 'Restaurant & Food', count: 143 },
  { icon: Stethoscope, name: 'Health & Hospital', count: 143 },
  { icon: BookOpen, name: 'Education & Training', count: 143 },
]

export function Categories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-brand">
            Job Categories
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {categories.map((cat) => (
            <div
              key={cat.name + cat.count}
              className="flex min-w-[180px] flex-shrink-0 snap-center flex-col items-center rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                <cat.icon size={24} />
              </div>
              <h3 className="mb-1 text-center text-sm font-bold text-gray-900">{cat.name}</h3>
              <p className="text-xs text-gray-500">
                <span className="font-semibold text-brand">{cat.count}</span> Open positions
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
