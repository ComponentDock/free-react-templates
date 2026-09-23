import { Home, BookOpen, Sofa, Cpu, Car, MoreHorizontal } from 'lucide-react'

const categories = [
  { label: 'Real Estate', count: 3921, Icon: Home },
  { label: 'Books & Magazines', count: 398, Icon: BookOpen },
  { label: 'Furniture', count: 1229, Icon: Sofa },
  { label: 'Electronics', count: 32891, Icon: Cpu },
  { label: 'Cars & Vehicles', count: 29221, Icon: Car },
  { label: 'Other', count: 219, Icon: MoreHorizontal },
]

export function Categories() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {categories.map(({ label, count, Icon }) => (
            <a
              key={label}
              href="#ads"
              className="group flex flex-col items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-5 text-center transition-colors hover:border-brand hover:bg-white"
            >
              <Icon
                size={32}
                className="text-brand transition-colors group-hover:text-teal-600"
                strokeWidth={1.5}
              />
              <span className="text-sm font-medium text-gray-700">{label}</span>
              <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                {count.toLocaleString()}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
