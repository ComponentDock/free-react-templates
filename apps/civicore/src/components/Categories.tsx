import { Briefcase, Code, Phone, Shirt, Megaphone, Wrench, Palette, Headphones } from 'lucide-react'

const categories = [
  { name: 'Accounting & Finance', count: 250, Icon: Briefcase },
  { name: 'Production & Operations', count: 250, Icon: Wrench },
  { name: 'Telecommunications', count: 250, Icon: Phone },
  { name: 'Garments & Textile', count: 250, Icon: Shirt },
  { name: 'Marketing & Sales', count: 250, Icon: Megaphone },
  { name: 'Engineering & Architecture', count: 250, Icon: Code },
  { name: 'Design & Creative', count: 250, Icon: Palette },
  { name: 'Customer Support', count: 250, Icon: Headphones },
]

export function Categories() {
  return (
    <section id="categories" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Find Job by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Browse opportunities across a wide range of industries and find the perfect fit for your
            skills.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#jobs"
              className="group flex flex-col items-center rounded-[3px] bg-paper p-6 text-center transition-shadow hover:shadow-md"
            >
              <cat.Icon className="h-10 w-10 text-brand transition-colors group-hover:text-brand-dark" />
              <h3 className="mt-4 font-display text-sm font-bold text-ink">{cat.name}</h3>
              <p className="mt-2 text-xs text-mist">{cat.count} open jobs</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
