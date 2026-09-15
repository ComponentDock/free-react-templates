import { Home, BookOpen, Sofa, Monitor, Car, Grid3X3 } from 'lucide-react'

interface CategoryItem {
  icon: React.ReactNode
  name: string
  count: string
}

const categories: CategoryItem[] = [
  { icon: <Home className="h-8 w-8" />, name: 'Real Estate', count: '3,921' },
  { icon: <BookOpen className="h-8 w-8" />, name: 'Books & Magazines', count: '398' },
  { icon: <Sofa className="h-8 w-8" />, name: 'Furniture', count: '1,229' },
  { icon: <Monitor className="h-8 w-8" />, name: 'Electronics', count: '32,891' },
  { icon: <Car className="h-8 w-8" />, name: 'Cars & Vehicles', count: '29,221' },
  { icon: <Grid3X3 className="h-8 w-8" />, name: 'Other', count: '219' },
]

export function CategoryStrip() {
  return (
    <section className="relative z-10 -mt-8 mx-auto max-w-6xl">
      <div className="flex flex-wrap items-center justify-around rounded-lg bg-white px-6 py-6 shadow-md">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center gap-2 px-4 py-2">
            <div className="text-brand">{cat.icon}</div>
            <span className="text-sm font-medium text-nav-text">{cat.name}</span>
            <span className="text-xs text-muted-text">{cat.count}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
