import { Briefcase, Code, Cpu, Newspaper, Stethoscope, Megaphone } from 'lucide-react'

const categories = [
  { icon: Briefcase, name: 'Accounting' },
  { icon: Code, name: 'Development' },
  { icon: Cpu, name: 'Technology' },
  { icon: Newspaper, name: 'Media & News' },
  { icon: Stethoscope, name: 'Medical' },
  { icon: Megaphone, name: 'Marketing' },
]

export function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Featured Job Categories</h2>
          <p className="text-gray-600">Browse top categories to find your ideal role</p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col items-center rounded-lg bg-surface p-6 transition-colors hover:bg-brand/10"
            >
              <cat.icon
                className="mb-3 text-brand transition-transform group-hover:scale-110"
                size={36}
              />
              <p className="text-sm font-medium text-gray-700 group-hover:text-brand">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
