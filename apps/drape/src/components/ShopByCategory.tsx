import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Clothing', seed: 'drape-clothing' },
  { name: 'Jewellery', seed: 'drape-jewellery' },
  { name: 'Bags', seed: 'drape-bags' },
]

export function ShopByCategory() {
  return (
    <section className="py-16 px-5">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Shop by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#shop"
              className="group relative block overflow-hidden aspect-[3/4]"
            >
              <img
                src={`https://picsum.photos/seed/${cat.seed}/800/1067`}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 flex items-center gap-2 text-white font-semibold">
                <span>{cat.name}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
