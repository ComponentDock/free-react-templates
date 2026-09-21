import { ArrowRight } from 'lucide-react'

const categories = [
  { title: 'Clothing Collections 2030', seed: 'threadline-cat1', link: '#clothing' },
  { title: 'Accessories', seed: 'threadline-cat2', link: '#accessories' },
  { title: 'Shoes Spring 2030', seed: 'threadline-cat3', link: '#shoes' },
]

export function CategoryBanners() {
  return (
    <section className="py-16 bg-white" aria-label="Category banners">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <div
                className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${cat.seed}/400/300)` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{cat.title}</h3>
                  <a
                    href={cat.link}
                    className="inline-flex items-center gap-1 text-white text-sm font-semibold uppercase hover:text-brand-400 transition-colors"
                  >
                    Shop now <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
