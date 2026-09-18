import { Code, Palette, GraduationCap, Share2 } from 'lucide-react'

const categories = [
  { icon: Code, name: 'Web Development', count: 354 },
  { icon: Palette, name: 'Multimedia', count: 100 },
  { icon: GraduationCap, name: 'Education & Training', count: 100 },
  { icon: Share2, name: 'Social Media', count: 300 },
]

export function TopCategories() {
  return (
    <section id="about" className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-extrabold text-ink">Top Categories</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-primary-400" />
              <h3 className="mb-1 text-lg font-bold text-ink">{name}</h3>
              <p className="text-sm text-smoke">Open position: {count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
