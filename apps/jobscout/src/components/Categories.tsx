import {
  Palette,
  Code2,
  TrendingUp,
  Smartphone,
  HardHat,
  Building2,
  PenTool,
  Briefcase,
} from 'lucide-react'
import type { ReactNode } from 'react'

interface Category {
  icon: ReactNode
  name: string
  count: number
}

const categories: Category[] = [
  { icon: <Palette className="h-12 w-12 text-navy" />, name: 'Design & Creative', count: 653 },
  { icon: <Code2 className="h-12 w-12 text-navy" />, name: 'Design & Development', count: 658 },
  { icon: <TrendingUp className="h-12 w-12 text-navy" />, name: 'Sales & Marketing', count: 658 },
  { icon: <Smartphone className="h-12 w-12 text-navy" />, name: 'Mobile Application', count: 658 },
  { icon: <HardHat className="h-12 w-12 text-navy" />, name: 'Construction', count: 658 },
  { icon: <Building2 className="h-12 w-12 text-navy" />, name: 'Real Estate', count: 658 },
  { icon: <PenTool className="h-12 w-12 text-navy" />, name: 'Content Writer', count: 658 },
  {
    icon: <Briefcase className="h-12 w-12 text-navy" />,
    name: 'Information Technology',
    count: 658,
  },
]

export function Categories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-brand">
            Browse Categories
          </span>
          <h2 className="text-4xl font-bold text-navy md:text-5xl">Browse Top Categories</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="cursor-pointer rounded border border-gray-100 py-10 text-center transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex justify-center">{cat.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-heading">{cat.name}</h3>
              <span className="text-brand">({cat.count})</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded border border-accent px-12 py-4 text-sm font-semibold uppercase tracking-wider text-accent transition-all hover:bg-accent hover:text-white"
          >
            Browse All Sectors
          </a>
        </div>
      </div>
    </section>
  )
}
